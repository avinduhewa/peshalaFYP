import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Routing } from './app.routing';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { LoginModule } from './modules/login/login.module';
import { DashboardModule } from './modules/dashboard/dashboard.component';
import { TeacherDashboardModule } from './modules/teachers-dashboard/teachers-dashboard.module';

import { MakeDashboardGetCall } from "./modules/dashboard/services/makeDashboardGetCall.service";
import { DashboardLayoutComponent } from './modules/dashboard/components/dashboard-layout/dashboard-layout.component';
import { TeachersComponent } from './modules/dashboard/components/teachers/teachers.component';
import { NotesComponent } from './modules/dashboard/components/notes/notes.component';
import { TeachersLayoutComponent } from './modules/teachers-dashboard/components/teachers-layout/teachers-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardLayoutComponent,
    TeachersComponent,
    NotesComponent,
    TeachersLayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    Routing,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    LoginModule,
    DashboardModule,
    TeacherDashboardModule,
  ],
  providers: [
    MakeDashboardGetCall,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
