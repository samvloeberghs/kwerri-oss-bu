import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SeoService } from '../../shared/seo.service';

@Component({
  selector: 'sv-kwerri',
  templateUrl: './kwerri.component.html',
  styles: [
    require('./kwerri.component.scss')
  ],
})
export class KwerriComponent {

  private generalConditionsShown = false;

  constructor(private route: ActivatedRoute,
              private seoService: SeoService) {

    const meta: any = route.snapshot.data['metadata'];
    if(meta){
      seoService.setMeta(meta.title, meta.description, route.snapshot.url);
    }else{
      seoService.setMeta();
    }

  }

  toggleGeneralConditionsShown($event){
    $event.preventDefault();
    this.generalConditionsShown = !this.generalConditionsShown;
  }

}
