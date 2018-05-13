import { Injectable } from '@angular/core';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../../environments/environment';

import { CognitoUtilService } from '../cognito/cognito-util';

@Injectable()
export class AuthenticationService {

  // private authService = `${environment.authenticationService}/`;

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options;

  constructor(
    // private http: Http,
    private httpClient: HttpClient,
    private cognitoUtilService: CognitoUtilService
  ) {
    this.cognitoUtilService.getToken((token) => {
      this.headers.set('Authorizer', token);
      // this.options = new RequestOptions({ headers: this.headers });
    });
  }

  getOptions() {
    return(this.options)
  }

  getAuthService(params) {
    // return this.httpClient.get(`${this.authService}${params}`, this.options);
      // .map((res: Response) => res.json())
      // .catch((error: any) => Observable.throw(error.json().error || 'Server Error Authentication Service'));
  }

  postAuthService(path, params){
    // return this.httpClient.post(`${this.authService}${path}`, params, this.options);
      // .map((res: Response) => res.json())
      // .catch((error: any) => Observable.throw(error.json().error || 'Server Error Authentication Service'));
  }

  register(params) {
    return this.postAuthService('register', params);
  }

  verify(params) {
    return this.postAuthService('verify', params);
  }

  resetPassword(params) {
    return this.postAuthService('resetPassword', params);
  }

  confirmReset(params) {
    return this.postAuthService('confirmReset', params);
  }

  changePassword(params) {
    return this.postAuthService('changePassword', params);
  }

  getUserList() {
    return this.getAuthService(`listUsers`);
  }

  getPreSignedUrl() {
    return this.getAuthService(`getPreSignedUrl`);
  }

  setActiveOrg(params): any {
    if (params.token !== undefined) {
      this.headers.set('Auth', params.token);
      // this.options = new RequestOptions({ headers: this.headers });
      delete params.token;
    }
    return this.postAuthService('setActiveOrg', params);
  }

  getActiveOrg(AccessToken): any {
    return this.getAuthService(`getActiveOrg?token=${AccessToken}`);
  }

  checkIfUserExists(isEmail: boolean, isUsername: boolean, value: string) {
    return this.getAuthService(`checkIfUserExists?isEmail=${isEmail}&isUsername=${isUsername}&value=${value}`);
  }

}