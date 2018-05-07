import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class MakeDashboardGetCall {

    memberRequest: any; // TODO: better write proper interfaces for these

    constructor(private http: HttpClient) { }

    //  delete projects
    getAllProjects(request){
        return this.http.delete(`${environment.taskUrl}/project`,request)
        .map(allTimeSheet => this.memberRequest = allTimeSheet);
    }

    //  delete task 
    deleteTask(request){
        return this.http.delete(`${environment.taskUrl}/task`,request)
        .map(allTimeSheet => this.memberRequest = allTimeSheet);
    }
}




