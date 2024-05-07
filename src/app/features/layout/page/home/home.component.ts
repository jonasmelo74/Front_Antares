import { Component } from '@angular/core';
import { MainModulo } from '../main/main.module';
import { SidebarComponent } from '../sidebar/sidebar.component';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [SidebarComponent, MainModulo]
})
export class HomeComponent {
  title = 'sidenav';

  isSideNavCollapsed: boolean = false;
  screenWidth = 0;

  ngOnInit() {
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

}
