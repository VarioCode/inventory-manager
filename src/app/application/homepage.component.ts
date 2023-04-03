import { Component, ViewChild } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { Router } from '@angular/router';
import { MatSidenavContainer } from '@angular/material/sidenav';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  constructor(public nav: NavigationService, private router: Router) {
    console.log('HomepageComponent constructor' + nav.isSideNavOpen);
    router.navigate(['/dashboard']);
  }

  openSideNav(event: boolean) {
    this.nav.isSideNavOpen = event;
    console.log('HomepageComponent openSideNav' + this.nav.isSideNavOpen);
  }

  closeSideNav() {
    this.nav.isSideNavOpen = false;
    console.log('HomepageComponent closeSideNav' + this.nav.isSideNavOpen);
  }
}
