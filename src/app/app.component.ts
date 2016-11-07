import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
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

}
