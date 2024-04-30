import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/account/login/login.component';
import { HomeComponent } from './features/layout/page/home/home.component';
import { AuthenticationComponent } from './features/layout/authentication/authentication.component';
import { CreateAccountComponent } from './features/account/create-account/create-account.component';
import { AuthGuard } from './features/account/shared/auth.guard';
import { DashboardMainComponent } from './features/layout/page/main/dashboard-main/dashboard-main.component';
import { MainComponent } from './features/layout/page/main/main.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'dashboard', component: MainComponent }
    ]
  },
  {
    path: 'auth',
    component: AuthenticationComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'create-account', component: CreateAccountComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
