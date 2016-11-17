import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SeoService } from '../../shared/seo.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styles: [
    require('./projects.component.scss')
  ],
})
export class ProjectsComponent {

  constructor(private route: ActivatedRoute,
              private seoService: SeoService) {

    const meta: any = route.snapshot.data['metadata'];
    if(meta){
      seoService.setMeta(meta.title, meta.description, route.snapshot.url, meta.shareImg);
    }else{
      seoService.setMeta();
    }

  }

}
