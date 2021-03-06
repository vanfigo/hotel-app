import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './providers/auth-guard.service';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { RESERVATION_ROUTES } from './components/reservation/reservation.routes';
import { ADMIN_ROUTES } from './components/admin/admin.routes';

const routes: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: '',       canActivate:[AuthGuardService], children: [
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'reservation', children: RESERVATION_ROUTES },
    { path: 'admin', children: ADMIN_ROUTES },
    { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
