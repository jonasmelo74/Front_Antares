import { AppRoutingModule } from "src/app/app-routing.module";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from './main/main.component';
import { MainModulo } from "./main/main.module";

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        CommonModule,
        MainModulo,
        HomeComponent,
        SidebarComponent,
        FooterComponent,
        HeaderComponent
    ],
    providers: [],
    bootstrap: []
})
export class PageModule { }
