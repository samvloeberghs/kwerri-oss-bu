import { Component, HostListener } from '@angular/core';
import { SeoSocialShareService } from 'ngx-sv-sss';

import { RouteHelper } from './shared/route-helper.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'sv-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  mobileNavToggled = false;

  constructor(
    private readonly routehelper: RouteHelper,
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
