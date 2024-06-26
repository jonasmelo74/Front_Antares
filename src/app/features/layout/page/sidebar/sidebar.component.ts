import { Component, EventEmitter, Output } from '@angular/core';
import { menuItens } from './menu-items';
import { SharedService } from '../shared.service';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { NgClass, NgIf, NgFor } from '@angular/common';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    standalone: true,
    imports: [NgClass, NgIf, NgFor, RouterLinkActive, RouterLink]
})
export class SidebarComponent {
 
  @Output() onToggleSideNav = new EventEmitter<SideNavToggle>();
  collapsed:boolean = true;
  screenWidth: number = 0;
  menuItens = menuItens;
  navData = menuItens;

  constructor(private sharedService: SharedService) {
  }


  ngOnInit() {
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
  }

  menuNavItem(item:any): void{
    item.isOpen = !item.isOpen;
  }
}
