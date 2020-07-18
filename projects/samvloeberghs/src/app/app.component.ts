import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { SeoSocialShareService } from 'ngx-seo';

import { RouteHelper } from './shared/route-helper.service';
import { environment } from '../environments/environment';
import { EnvironmentService } from './shared/environment.service';

@Component({
  selector: 'sv-app',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public readonly today = new Date();
  public readonly currentUrl$ = this.routeHelper.currentUrl$;
  public readonly newVersionAvailable$ = this.environmentService.newVersionAvailable$;
  public mobileNavToggled = false;

  constructor(
    private readonly routeHelper: RouteHelper,
    private readonly seoSocialShareService: SeoSocialShareService,
    private readonly environmentService: EnvironmentService,
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

  public update($event) {
    $event.preventDefault();
    this.environmentService.update();
  }

  @HostListener('document:keydown', ['$event'])
  private onKeydownHandler(event: KeyboardEvent) {
    this.routeHelper.keyboardNavigate(event.key);
  }

}
