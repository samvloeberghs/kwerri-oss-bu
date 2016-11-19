import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'sv-app',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {

  constructor(private router: Router) {

    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        scroll(0, 0);
      });

  }
}
