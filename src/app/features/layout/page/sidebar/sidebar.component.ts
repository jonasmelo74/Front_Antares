import { Component } from '@angular/core';
import { menuItens } from './menu-items';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private sharedService: SharedService) {
    this.sharedService.currentClickExpansed.subscribe(state => this.collapsed = state);
  }

  menuItens = menuItens;
  expandedIndex: number | null = null;
  collapsed = true;

  ngOnInit() {
  }

  menuNavItem(item:any): void{
    item.isOpen = !item.isOpen;
  }

  toggleMenu(index: any): void {
    this.expandedIndex === index ? this.expandedIndex = null : this.expandedIndex = index;
  }
}
