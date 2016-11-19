import { Component, ViewEncapsulation } from '@angular/core';

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

  constructor() {

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
