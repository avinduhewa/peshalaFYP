import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { CognitoUtilService } from '../../login/services/cognito/cognito-util';
import 'rxjs/add/operator/map';


@Injectable()
export class MakeDashboardGetCall {

    memberRequest: any; // TODO: better write proper interfaces for these
    public token;

    constructor(
        private http: HttpClient,
        private cognitoUtilService : CognitoUtilService
    ) {
        this.cognitoUtilService.getToken((token) => {
            console.log(token);
            this.token = token;
        });
     }

    getClasses(): Observable<any>{
        return this.http.get(`magister-classes/class/all/`, {
            headers: new HttpHeaders().set('Authorization', this.token).set('Content-Type', 'application/json')
        })
    }
}




