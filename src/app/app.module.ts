import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/account/login/login.component';
import { HomeComponent } from './features/layout/home/home.component';
import { AuthenticationComponent } from './features/layout/authentication/authentication.component';
import { CreateAccountComponent } from './features/account/create-account/create-account.component';
import { NavComponent } from './features/layout/nav/nav.component';
import { FooterComponent } from './features/layout/footer/footer.component';
import { HeaderComponent } from './features/layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CreateAccountComponent,
    AuthenticationComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
