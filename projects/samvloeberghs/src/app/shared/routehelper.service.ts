import { Injectable } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { ViewportScroller } from '@angular/common';
import { filter, map, tap } from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, Router, RouterState } from '@angular/router';

import { SeoService } from './seo.service';

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
      const meta: any = route.snapshot.data['metadata'];
      if (meta) {
        this.seoService.setMeta(meta.title, meta.description, meta.shareImg, this.router.routerState.snapshot.url);
      }
    });
  }

}
