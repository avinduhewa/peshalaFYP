
import { Injectable, Inject } from '@angular/core';

declare var AWSCognito: any;
declare var AWS: any;

@Injectable()
export class CognitoUtilService {

  // TODO: all of these move to environment.ts
  public static _REGION = 'ap-southeast-1';
  // Following keys are where it's customized with cognito identities
  public static _IDENTITY_POOL_ID = 'ap-southeast-1:801d99bc-e28b-4928-8b48-68b094f574bf';
  public static _USER_POOL_ID = 'ap-southeast-1_32vOfpIOk';
  public static _CLIENT_ID = '3fqi6045p77poi5d7kpp0sucbn';

  public static _POOL_DATA = {
    UserPoolId: CognitoUtilService._USER_POOL_ID,
    ClientId: CognitoUtilService._CLIENT_ID
  };


  public static getAwsCognito(): any {
    return AWSCognito;
  }

  // access user pool
  getUserPool() {
    return new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(CognitoUtilService._POOL_DATA);
  }

  // get the current user
  getCurrentUser() {
    return this.getUserPool().getCurrentUser();
  }

  // get cognito identity
  getCognitoIdentity(): string {
    return AWS.config.credentials.identityId;
  }

  // get the users access tokens
  // TODO: do you have something against promises? :P Use them. They exist for a reason :P
  getAccessToken(callback): any {
    if (callback == null) {
      // console.log('CognitoUtil: callback in getAccessToken is null...returning');
    }
    if (this.getCurrentUser() != null) {
      this.getCurrentUser().getSession(function (err, session) {
        if (err) {
          // console.log('CognitoUtil: Can't set the credentials:' + err);
          callback(null);
        } else {
          if (session.isValid()) {
            callback(session.getAccessToken().getJwtToken());
          }
        }
      });
    } else {
      callback(null);
    }
  }


  // TODO: sigh! promises
  getToken(callback) {

    if (this.getCurrentUser() != null) {
      const userData = {
        Username: this.getCurrentUser().username,
        Pool: this.getUserPool()
      };

      const cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
      this.getRfToken((token) => {
        cognitoUser.refreshSession(token, (err, session) => {

        });
      });
    }

    if (this.getCurrentUser() != null) {
      this.getCurrentUser().getSession(function (err, session) {
        if (err) {
          callback(null);
        } else {
          if (session.isValid()) {
            callback(session.getIdToken().getJwtToken());
          } else {
            callback(null);
          }
        }
      });
    } else {
      return null;
    }
  }

  // get user refresh token
  // TODO: check this link for reference: https://www.youtube.com/watch?v=YAsjd61CTlY
  getRfToken(callback): void {
    if (this.getCurrentUser() != null) {
      this.getCurrentUser().getSession(function (err, session) {
        if (err) {
          callback(null);
        } else if (session.isValid()) { callback(session.getRefreshToken()); }
      });
    } else {
      callback(null);
    }
  }
}
