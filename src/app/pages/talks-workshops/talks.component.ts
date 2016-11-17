import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isNode } from 'angular2-universal/browser';

import { SeoService } from '../../shared/seo.service';

@Component({
  selector: 'talks',
  templateUrl: './talks.component.html',
  styles: [
    require('./talks.component.scss')
  ],
})
export class TalksComponent {

  constructor(private route: ActivatedRoute,
              private seoService: SeoService) {

    if (isNode) {
      const meta: any = route.snapshot.data['metadata'];
      if (meta) {
        seoService.setMeta(meta.title, meta.description, route.snapshot.url, meta.shareImg);
      } else {
        seoService.setMeta();
      }
    }

  }

}
