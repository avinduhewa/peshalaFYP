import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MakeUserPostCalls {

  memberLoginRequest:any;
  messages : any;

  constructor(private http: HttpClient) {
   }

  signUp(request): Observable<any> {
      return this.http.post(`/magister-auth/signUp`,request)
  }

  confirmationCode(request): Observable<any> {
    return this.http.post(`/magister-auth/confirmSignUp`,request)
  } 

  accountConf(request): Observable<any> {
    return this.http.post(`${environment.usersUrl}/confirmSignUp`,request);
  } 
}


