import { AppRoutingModule } from "src/app/app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from './main.component';
import { DashboardMainComponent } from "../components/dashboard-main/dashboard-main.component";


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    DashboardMainComponent
],
  exports: [
    MainComponent,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModulo { }