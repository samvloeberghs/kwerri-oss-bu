import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styles: [
    require('./home.component.scss')
  ],
})
export class HomeComponent {

  constructor(private route: ActivatedRoute) {
    //console.log(route);
  }
}
