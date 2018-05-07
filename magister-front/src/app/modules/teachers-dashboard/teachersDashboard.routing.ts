import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachersLayoutComponent } from './components/teachers-layout/teachers-layout.component';
import { TeachersDashboardComponent } from './components/teachers-dashboard/teachers-dashboard.component';


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
    ]
  }
];

export const DashboardRoutes = RouterModule.forChild(DASHBOARD_ROUTES);

@NgModule({
  imports: [RouterModule.forChild(DASHBOARD_ROUTES)],
  exports: [RouterModule]
})
export class DashboardTeacherRoutingModule { }

