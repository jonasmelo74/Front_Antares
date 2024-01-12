import { Component } from '@angular/core';
import { itemsMenu } from './menu-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  itemsMenu = itemsMenu;
  collapsed = false;

  ngOnInit() {
  }

  menuNavItem(item:any): void{
    item.isOpen = !item.isOpen;
  }
}
