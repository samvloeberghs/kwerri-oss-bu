import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SeoService } from '../../shared/seo.service';

@Component({
  selector: 'sv-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {

  constructor(
    private route: ActivatedRoute,
    private seoService: SeoService,
  ) {

    const meta: any = route.snapshot.data['metadata'];
    if (meta) {
      seoService.setMeta(meta.title, meta.description, route.snapshot.url.join(''));
    } else {
      seoService.setMeta();
    }

  }

}
