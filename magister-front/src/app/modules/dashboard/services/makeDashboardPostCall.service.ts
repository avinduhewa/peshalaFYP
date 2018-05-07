import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MakeDashboardPostCall {

  memberLoginRequest: any; // TODO: remove if unused
  messages: any; // TODO: remove if unused

  constructor(private http: HttpClient) { }

  // create project 
  createProject(request): Observable<any> {
    return this.http.post(`${environment.projectUrl}/project`, request);
  }

  // add mamber 
  addMember(request): Observable<any> {
    // return this.http.post(`${environment.projectUrl}/project`,request,`/addMembers`);
    return this.http.post(`${environment.projectUrl}/project`,request);
  }

  // update project 
  updateProject(request): Observable<any> {
    return this.http.post(`${environment.projectUrl}/project`,request);
    // return this.http.post(`${environment.projectUrl}/project`,request,`/update`);
  }

  // create task
  createTask(request): Observable<any> {
    return this.http.post(`${environment.taskUrl}/task`,request);
  }

  // update task
  updateTask(request): Observable<any> {
    return this.http.post(`${environment.taskUrl}/task`,request);
    // return this.http.post(`${environment.taskUrl}/task`,request,`update`);
  }

}
