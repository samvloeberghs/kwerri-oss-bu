import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public speakers = [{
    id: 'manfred',
    img: '/assets/manfred.jpg',
    title: 'Sustainable Angular architectures with strategic domain driven design and monorepos',
    author: 'Manfred Steyer',
  }, {
    id: 'juri',
    img: '/assets/juri.png',
    title: 'Enterprise Grade Angular Reactive Forms',
    author: 'Juri Strumpflohner',
  }, {
    id: 'amir',
    img: '/assets/amir.jpg',
    title: 'Reliably End-to-End Testing Angular Applications',
    author: 'Amir Rustamzadeh',
  }, {
    id: 'max',
    img: '/assets/max.jpg',
    title: 'The Secrets Behind Angular’s Lightning Speed',
    author: 'Max Koretskyi',
  }, {
    id: 'philippe',
    img: '/assets/philippe.jpeg',
    title: 'Authentication with OpenID Connect in Angular applications',
    author: 'Philippe De Ryck',
  }, {
    id: 'michaeljanniklas',
    img: '/assets/michael-janniklas.jpg',
    title: 'To be defined',
    author: 'Michael Hladky & Jan-Niklas Wortman',
  },{
    id: 'anasherry',
    img: '/assets/ana-sherry.jpg',
    title: 'Exploring Web VR',
    author: 'Ana Cidre & Sherry List',
  }];

}
