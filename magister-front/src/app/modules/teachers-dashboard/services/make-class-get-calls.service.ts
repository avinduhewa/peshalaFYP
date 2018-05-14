import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { CognitoUtilService } from '../../login/services/cognito/cognito-util';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class MakeDashboardGetCall {

    memberRequest: any; 
    classes: any; 
    public options;
    public token;

    constructor(private http: HttpClient,private cognitoUtilService: CognitoUtilService) { 
        this.cognitoUtilService.getToken((token) => {
          this.token = token;
          // this.options ={
          //     headers: new HttpHeaders().set('Authorization', token)
          //   }
          // this.options = new RequestOptions({ headers: this.headers });
      });
    }

    // get all projects
    getAllProjects(request){
        return this.http.get(`${environment.classesUrl}/project/all/${request}`, {
          headers: new HttpHeaders().set('Authorization', this.token).set('Content-Type', 'application/json')
      }).map(Classes => this.classes = Classes);
    }

    getClasses(): Observable<any>{
        return this.http.get(`magister-classes/class/all/`, {
            headers: new HttpHeaders().set('Authorization', this.token).set('Content-Type', 'application/json')
        })
    }
}




