import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardRoutes } from './dashboard.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutes,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,

  ],
  declarations: [
    DashboardComponent,
  ],
  providers: [

  ]
})
export class DashboardModule { 

}
