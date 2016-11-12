import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SeoService } from '../../shared';

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
    console.log(route);
  }
}
