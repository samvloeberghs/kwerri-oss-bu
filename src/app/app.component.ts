import { Component, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Angulartics2, Angulartics2GoogleAnalytics } from 'angulartics2';

@Component({
  selector: 'sv-app',
  templateUrl: './app.component.html',
  styles: [
    require('./app.component.scss')
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  mobileNavToggled = false;

  constructor(private angulartics2: Angulartics2,
              private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
              private router: Router) {

    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        scroll(0, 0);
      });

  }

  toggleMobileNav(event?: any, block = false) {
    this.mobileNavToggled = !this.mobileNavToggled;
    if (block) {
      event.preventDefault();
    }
  }

  navigateMobile() {
    scroll(0, 0);
    this.toggleMobileNav();
  }

}
