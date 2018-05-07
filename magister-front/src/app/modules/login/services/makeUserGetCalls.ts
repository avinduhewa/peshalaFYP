import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class MakeUserGetCalls {

    memberRequest: any; // TODO: better write proper interfaces for these

    constructor(private http: HttpClient) { }

    membershipRequest(request): Observable<any> {
        return this.http.post('', request)
            .map(memberRequest => this.memberRequest = memberRequest);
    }


}

