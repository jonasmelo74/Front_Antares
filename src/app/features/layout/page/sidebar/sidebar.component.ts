import { Component } from '@angular/core';
import { menuItens } from './menu-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  menuItens = menuItens;
  
  collapsed = true ;
  expandedIndex: number | null = null;

  ngOnInit() {
    console.log(this.menuItens)
  }

  menuNavItem(item:any): void{
    item.isOpen = !item.isOpen;
  }

  toggleMenu(index: any): void {
    this.expandedIndex === index ? this.expandedIndex = null : this.expandedIndex = index;
  }
}
