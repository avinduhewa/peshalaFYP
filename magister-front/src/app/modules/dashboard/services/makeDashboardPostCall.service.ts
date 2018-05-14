import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CognitoUtilService } from '../../login/services/cognito/cognito-util';

@Injectable()
export class MakeDashboardPostCall {

  memberLoginRequest: any; // TODO: remove if unused
  messages: any; // TODO: remove if unused
  public token;

  constructor(
    private http: HttpClient,
    private cognitoUtilService : CognitoUtilService
) {
    this.cognitoUtilService.getToken((token) => {
        this.token = token;
    });
 }

  joinClass(classId): Observable<any> {
      
      return this.http.post(`magister-classes/class/${classId}/acceptClass`,{}, {
        headers: new HttpHeaders().set('Authorization', this.token).set('Content-Type', 'application/json')
    })
  }
}
