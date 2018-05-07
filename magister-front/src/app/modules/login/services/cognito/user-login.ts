import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { CognitoUtilService } from './cognito-util';
import { UtilityService } from '../api/utility.service';

declare var AWSCognito: any;
declare var AWS: any;

@Injectable()
export class UserLoginService {

  constructor(
    public cognitoUtilService: CognitoUtilService,
    public utilityService: UtilityService,
  ) { }

  // user Authentication
  // SUGGESTION: Avoid using callbacks. Use Promises with Async Await
  authenticate({ username, password }, callback) {
    // TODO: get these constants from environment.ts
    AWSCognito.config.update({
      accessKeyId: 'AKIAILYRG3JD3LFV7J3Q',
      secretAccessKey: '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'
    });

    const authenticationData = {
      Username: username,
      Password: password,
    };
    const authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider
      .AuthenticationDetails(authenticationData);

    const userData = {
      Username: username,
      Pool: this.cognitoUtilService.getUserPool()
    };

    // const userProfile = this.userService;
    const utilityService = this.utilityService;
    // const authService = this.authService;
    const cognitoUtilService = this.cognitoUtilService;

    const cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        const logins = {};
        // SUGGESTION: coding standards suggest using ` ${variable} some string` instead of variable + ' some string'
        logins['cognito-idp.' + CognitoUtilService._REGION + '.amazonaws.com/' + CognitoUtilService._USER_POOL_ID]
          = result.getIdToken().getJwtToken();

        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId: CognitoUtilService._IDENTITY_POOL_ID,
          Logins: logins
        });
        // setting tokens
        utilityService.setToken(result.idToken.jwtToken);
        utilityService.forceSetToken();
        // TODO: cleanup
        // userProfile.getUser().subscribe(data => {
        //   cognitoUtilService.getAccessToken((AccessToken) => {
        //     const params = {
        //       orgId: data.data.organisations.length === 0 ? undefined : data.data.organisations[0]._id,
        //       AccessToken,
        //       token: ''
        //     };
        //     cognitoUtilService.getToken(token1 => {
        //       params.token = token1;
        //     });
        //   });
        // });
        callback(null, result);
      },
      onFailure: function (err) {
        callback(err.message, null, null);
      },
    });
  }

  // user logout
  logout() {
    this.cognitoUtilService.getCurrentUser().signOut();
    // TODO: no need of using window. Just use localStorage.clear
    window.localStorage.clear();

    // TODO: no need of using window. same as above
    window.sessionStorage.clear();
    // TODO: don't reload the application on logout, Bad practice.
    window.location.reload(true);
  }

  // checking if user is authenticated
  // TODO: Promises is the way to go forward
  isAuthenticated(callback) {

    const cognitoUser = this.cognitoUtilService.getCurrentUser();

    if (cognitoUser != null) {
      cognitoUser.getSession(function (err, session) {
        if (err) {
          callback(err, false);
        } else {
          callback(err, session.isValid());
        }
      });
    } else {
      callback('Can\'t retrieve the CurrentUser', false);
    }
  }

  // get the user params
  // TODO: promises promises
  getParameters(callback) {
    const cognitoUser = this.cognitoUtilService.getCurrentUser();

    if (cognitoUser != null) {
      cognitoUser.getSession(function (err1, session) {
        if (err1) {
          return callback(null);
        } else {
          cognitoUser.getUserAttributes(function (err2, result) {
            if (err2) {
              // console.log('UserParametersService: in getParameters: ' + err);
            } else {
              return callback(result);
            }
          });
        }
      });
    }
  }

}
