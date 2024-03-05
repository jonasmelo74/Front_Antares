import { AppRoutingModule } from "src/app/app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from './main.component';
import { DashboardMainModule } from "./dashboard-main/dashboard-main.module";

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    DashboardMainModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule
  ],
  exports: [
    MainComponent,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModulo { }