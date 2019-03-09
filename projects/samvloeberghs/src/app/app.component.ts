import { Component, HostListener } from '@angular/core';
import { SeoSocialShareService } from 'seo-social-share';

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
    private readonly seoSocialShareService: SeoSocialShareService,
  ) {
    this.seoSocialShareService.setFbAppId(environment.facebookAppId);
    this.seoSocialShareService.setTwitterSiteCreator(environment.twitterSiteCreator);
    this.seoSocialShareService.setTwitterCard('summary_large_image');
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
