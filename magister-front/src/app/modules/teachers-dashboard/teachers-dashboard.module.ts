import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DashboardTeacherRoutingModule } from './teachersDashboard.routing';

import { TeachersDashboardComponent } from './components/teachers-dashboard/teachers-dashboard.component';
import { CreateClassComponent } from './components/create-class/create-class.component';

import { MakeDashboardGetCall } from './services/make-class-get-calls.service';
import { MakeDashboardPostCall } from './services/make-class-post-calls.service';
import { ClassInfoComponent } from './components/class-info/class-info.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    DashboardTeacherRoutingModule,

  ],
  declarations: [
    TeachersDashboardComponent,
    CreateClassComponent,
    ClassInfoComponent,
  ],
  providers: [
    MakeDashboardGetCall,
    MakeDashboardPostCall
  ]
})
export class TeacherDashboardModule { }
