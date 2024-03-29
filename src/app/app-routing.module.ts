import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/account/login/login.component';
import { HomeComponent } from './features/layout/page/home/home.component';
import { AuthenticationComponent } from './features/layout/authentication/authentication.component';
import { CreateAccountComponent } from './features/account/create-account/create-account.component';
import { AuthGuard } from './features/account/shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: HomeComponent },
      //{ path: }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'create-account', component: CreateAccountComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
