import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { SeoSocialShareService } from 'ngx-seo';

import { RouteHelper } from './shared/route-helper.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'sv-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  public readonly today = new Date();
  public readonly currentUrl$ = this.routeHelper.currentUrl$;
  public mobileNavToggled = false;

  constructor(
    private readonly routeHelper: RouteHelper,
    private readonly seoSocialShareService: SeoSocialShareService,
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
    this.routeHelper.keyboardNavigate(event.key);
  }

}
