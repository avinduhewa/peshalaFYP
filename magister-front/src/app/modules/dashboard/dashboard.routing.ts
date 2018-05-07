import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { NotesComponent } from './components/notes/notes.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';

const DASHBOARD_ROUTES: Routes = [
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
  },
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
        {
          path: 'dashboard',
          component: DashboardComponent
        },
        {
          path: 'teachers',
          component: TeachersComponent
        },
        {
          path: 'notes',
          component: NotesComponent
        },
    ]
  }
];

export const DashboardRoutes = RouterModule.forChild(DASHBOARD_ROUTES);

@NgModule({
  imports: [RouterModule.forChild(DASHBOARD_ROUTES)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

