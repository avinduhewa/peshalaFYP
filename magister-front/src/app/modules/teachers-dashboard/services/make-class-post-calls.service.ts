import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { CognitoUtilService } from '../../login/services/cognito/cognito-util';
import 'rxjs/add/operator/map';

@Injectable()
export class MakeDashboardPostCall {

  memberLoginRequest: any; // TODO: remove if unused
  messages: any; // TODO: remove if unused
  memberRequest: any; 
  classes: any; 
  public options;
  public token;

  constructor(private http: HttpClient,private cognitoUtilService: CognitoUtilService) {
    this.cognitoUtilService.getToken((token) => {
      this.token = token;

  });
   }

    createClass(request){
      return this.http.post(`magister-classes/class`,request, {
        headers: new HttpHeaders().set('Authorization', this.token).set('Content-Type', 'application/json')
    }).map(Classes => this.classes = Classes);
  }

}
