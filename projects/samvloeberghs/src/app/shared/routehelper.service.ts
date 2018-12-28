import { Injectable } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { ViewportScroller } from '@angular/common';
import { filter, map, tap } from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { JsonLdService } from 'jsonld';

import { SeoService } from './seo.service';
import { environment } from '../../environments/environment';

// inject in root
@Injectable({
  providedIn: 'root',
})
export class Routehelper {

  private routes = [, '/', '/posts', '/talks-workshops', '/projects', '/about', '/kwerri'];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    private viewportScroller: ViewportScroller,
    private seoService: SeoService,
    private jsonLdService: JsonLdService,
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
        this.jsonLdService.setData(seo.title, environment.url + this.router.routerState.snapshot.url);
        this.seoService.setMeta(seo.title, seo.description, seo.shareImg, this.router.routerState.snapshot.url);
      } else {
        this.jsonLdService.setData(seo.title, environment.url);
        this.seoService.setMeta(environment.seo.title, environment.url);
      }
    });
  }

}
