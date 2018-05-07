import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DashboardTeacherRoutingModule } from './teachersDashboard.routing';

import { TeachersDashboardComponent } from './components/teachers-dashboard/teachers-dashboard.component';


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
  ],
  providers: [

  ]
})
export class TeacherDashboardModule { }
