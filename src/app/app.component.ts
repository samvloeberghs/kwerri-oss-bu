import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

@Component({
  selector: 'sv-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  mobileNavToggled = false;

  constructor(@Inject('isBrowser') private isBrowser: boolean,
              private router: Router,
              private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {

    angulartics2GoogleAnalytics.startTracking();
    router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe((event: NavigationEnd) => {
      if (this.isBrowser) {
        scroll(0, 0);
      }
    });

  }

  toggleMobileNav(event?: any, block = false) {
    this.mobileNavToggled = !this.mobileNavToggled;
    if (block) {
      event.preventDefault();
    }
  }

  navigateMobile() {
    // scroll(0, 0);
    this.toggleMobileNav();
  }

}
