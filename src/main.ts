import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { CommonModule } from '@angular/common';
import { PageModule } from './app/features/layout/page/page.module';
import { AppRoutingModule } from './app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';


bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserModule, ReactiveFormsModule, AppRoutingModule, PageModule, CommonModule)]
})
  .catch(err => console.error(err));
