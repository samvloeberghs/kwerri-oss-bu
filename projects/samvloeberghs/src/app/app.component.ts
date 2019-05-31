import { Component, HostListener } from '@angular/core';
import { SeoSocialShareService } from 'ngx-seo';

import { RouteHelper } from './shared/route-helper.service';
import { environment } from '../environments/environment';
import { PwaService } from './shared/pwa.service';

@Component({
  selector: 'sv-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public mobileNavToggled = false;
  public newVersionAvailable$ = this.pwaService.newVersionAvailable$;s

  constructor(
    private readonly routehelper: RouteHelper,
    private readonly seoSocialShareService: SeoSocialShareService,
    private readonly pwaService: PwaService
  ) {
    this.seoSocialShareService.setFbAppId(environment.facebookAppId);
    this.seoSocialShareService.setTwitterSiteCreator(environment.twitterSiteCreator);
    this.seoSocialShareService.setTwitterCard('summary_large_image');
  }

  public toggleMobileNav(event?: any, block = false) {
    this.mobileNavToggled = !this.mobileNavToggled;
    if (block) {
      event.preventDefault();
    }
  }

  public navigateMobile() {
    this.toggleMobileNav();
  }

  @HostListener('document:keydown', ['$event'])
  private onKeydownHandler(event: KeyboardEvent) {
    this.routehelper.keyboardNavigate(event.key);
  }

}
