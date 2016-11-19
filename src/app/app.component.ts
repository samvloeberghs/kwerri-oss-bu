import { Component, ViewEncapsulation } from '@angular/core';
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
              private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {

  }

  toggleMobileNav(event?: any, block = false) {
    this.mobileNavToggled = !this.mobileNavToggled;
    if (block) {
      event.preventDefault();
    }
  }

  navigateMobile(){
    scroll(0,0);
    this.toggleMobileNav();
  }

}
