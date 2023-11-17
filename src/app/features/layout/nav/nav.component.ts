import { Component } from '@angular/core';
import { itemsMenu } from './menu-items';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  itemsMenu = itemsMenu;

  ngOnInit() {

  }

  menuNavItem(item:any): void{
    item.isOpen = !item.isOpen;
  }
}
