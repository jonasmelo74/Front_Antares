import { Component, EventEmitter, Output } from '@angular/core';
import { menuItens } from './menu-items';
import { SharedService } from '../shared.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Output() onToggleSideNav = EventEmitter<SideNavToggle> = new EventEmitter();
  
  menuItens = menuItens;
  expandedIndex: number | null = null;
  collapsed:boolean = true;



  constructor(private sharedService: SharedService) {
  }


  ngOnInit() {
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }

  closeSidenav(): void {
    this.collapsed = false;
  }

  menuNavItem(item:any): void{
    item.isOpen = !item.isOpen;
  }

  toggleMenu(index: any): void {
    this.expandedIndex === index ? this.expandedIndex = null : this.expandedIndex = index;
  }
}
