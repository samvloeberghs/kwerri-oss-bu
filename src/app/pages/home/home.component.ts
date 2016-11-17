import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isNode } from 'angular2-universal/browser';

import { SeoService } from '../../shared/seo.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styles: [
    require('./home.component.scss')
  ],
})
export class HomeComponent {

  constructor(private route: ActivatedRoute,
              private seoService: SeoService) {

    if (isNode) {
      const meta: any = route.snapshot.data['metadata'];
      if (meta) {
        seoService.setMeta(meta.title, meta.description, meta.url);
      } else {
        seoService.setMeta();
      }
    }

  }

}
