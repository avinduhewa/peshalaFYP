import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachersLayoutComponent } from './components/teachers-layout/teachers-layout.component';
import { TeachersDashboardComponent } from './components/teachers-dashboard/teachers-dashboard.component';
import { CreateClassComponent } from './components/create-class/create-class.component';
import { ClassInfoComponent } from './components/class-info/class-info.component';



const DASHBOARD_ROUTES: Routes = [
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
  },
  {
    path: '',
    component: TeachersLayoutComponent,
    children: [
        {
          path: 'teacherdashboard',
          component: TeachersDashboardComponent
        },
        {
          path: 'createClass',
          component: CreateClassComponent
        },
        {
          path: 'classInfo',
          component: ClassInfoComponent
        },
    ]
  }
];

export const DashboardRoutes = RouterModule.forChild(DASHBOARD_ROUTES);

@NgModule({
  imports: [RouterModule.forChild(DASHBOARD_ROUTES)],
  exports: [RouterModule]
})
export class DashboardTeacherRoutingModule { }

