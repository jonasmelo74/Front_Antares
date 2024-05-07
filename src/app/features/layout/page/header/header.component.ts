import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true
})
export class HeaderComponent {

  constructor(private sharedService: SharedService) { }

  toggleClickExpansed() {
    this.sharedService.changeClickExpansed(true);
  }
}
