import { Component } from '@angular/core';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  constructor(public nav: NavigationService) {
    console.log('ToolbarComponent constructor' + nav.isSideNavOpen);
  }
  onClickedHamburgerIcon(): void {
    this.nav.isSideNavOpen = !this.nav.isSideNavOpen;
    console.log(
      'ToolbarComponent onClickedHamburgerIcon' + this.nav.isSideNavOpen
    );
  }
}
