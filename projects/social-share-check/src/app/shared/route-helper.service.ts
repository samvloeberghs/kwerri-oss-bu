import { Injectable } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { ViewportScroller } from '@angular/common';
import { filter, map, tap } from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { JsonLdService } from 'ngx-sv-json-ld';
import { SeoSocialShareData, SeoSocialShareService } from 'ngx-sv-sss';

import { environment } from '../../environments/environment';

// inject in root
@Injectable({
  providedIn: 'root',
})
export class RouteHelper {

  private routes = [, '/', '/', '/tips-and-tricks', '/about'];

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    private readonly viewportScroller: ViewportScroller,
    private readonly seoSocialShareService: SeoSocialShareService,
    private readonly jsonLdService: JsonLdService,
  ) {
    this.angulartics2GoogleAnalytics.startTracking();
    this.setupRouting();
  }

  keyboardNavigate(key: string | number) {
    if (this.routes[key]) {
      this.router.navigateByUrl(this.routes[key]);
    }
  }

  private setupRouting() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      tap(() => {
        this.viewportScroller.scrollToPosition([0, 0]);
      }),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary'),
    ).subscribe((route: ActivatedRoute) => {
      const seo: any = route.snapshot.data['seo'];
      if (seo) {
        // TODO: set type
        const jsonLd = {
          name: seo.title,
          url: environment.url + this.router.routerState.snapshot.url,
        };
        this.jsonLdService.setData('Website', jsonLd);
        const seoSocialShareData: SeoSocialShareData = {
          title: seo.title,
          description: seo.description,
          image: seo.shareImg,
          author: environment.seo.author,
          url: environment.url + this.router.routerState.snapshot.url,
          type: 'website',
        };
        this.seoSocialShareService.setData(seoSocialShareData);
      } else {
        // TODO: set type
        const jsonLd = {
          name: environment.seo.title,
          url: environment.url,
        };
        this.jsonLdService.setData('Website', jsonLd);
        const seoSocialShareData: SeoSocialShareData = {
          title: environment.seo.title,
          description: environment.seo.description,
          image: environment.seo.shareImg,
          url: environment.url,
          type: 'website',
        };
        this.seoSocialShareService.setData(seoSocialShareData);
      }
    });
  }

}
