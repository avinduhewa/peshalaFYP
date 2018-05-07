import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { CognitoUtilService } from '../cognito/cognito-util';

@Injectable()
export class UtilityService {

  constructor(
    private httpClient: HttpClient,
    private cognitoUtilService: CognitoUtilService
  ) { }

  // TODO: empty url
  invokeUtilityFunctions(path, params): Observable<any> {
    this.forceSetToken();
    return this.httpClient.post(``, params);
  }

  // Setting the tokens
  setToken(token) {
    // This is left as it is to check whether the issue with token refreshing is resolved
  }

  forceSetToken() {
    // This is left as it is to check whether the issue with token refreshing is resolved
    this.cognitoUtilService.getToken((token) => {
      this.setToken(token);
    });
  }

}
