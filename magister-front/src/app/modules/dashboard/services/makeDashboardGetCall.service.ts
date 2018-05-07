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

    // get all projects
    getAllProjects(request){
        return this.http.get(`${environment.taskUrl}/project/all`,request)
        .map(allTimeSheet => this.memberRequest = allTimeSheet);
    }

    //get project 
    getProject(request){
        return this.http.get(`${environment.projectUrl}/project`,request)
        .map(allTimeSheet => this.memberRequest = allTimeSheet);
    }

    //get task
    getTask(request){
        return this.http.get(`${environment.projectUrl}/task`,request)
        .map(allTimeSheet => this.memberRequest = allTimeSheet);
    }

    //get all task
    getAllTask(request){
        return this.http.get(`${environment.projectUrl}/task/all`,request)
        .map(allTimeSheet => this.memberRequest = allTimeSheet);
    }
}




