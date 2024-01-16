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

  ngOnInit() {
    
  }

  menuNavItem(item:any): void{
    item.isOpen = !item.isOpen;
  }
}
