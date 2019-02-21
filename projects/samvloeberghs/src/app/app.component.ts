import { Component, HostListener } from '@angular/core';
import { SeoService } from 'seo';

import { Routehelper } from './shared/routehelper.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'sv-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  mobileNavToggled = false;

  constructor(
    private readonly routehelper: Routehelper,
    private readonly seoService: SeoService,
  ) {
    this.seoService.setFbAppId(environment.facebookAppId);
    this.seoService.setTwitterSiteCreator(environment.twitterSiteCreator);
    this.seoService.setTwitterCard('summary_large_image');
  }

  toggleMobileNav(event?: any, block = false) {
    this.mobileNavToggled = !this.mobileNavToggled;
    if (block) {
      event.preventDefault();
    }
  }

  navigateMobile() {
    this.toggleMobileNav();
  }

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.routehelper.keyboardNavigate(event.key);
  }

}
