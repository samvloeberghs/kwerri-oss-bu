import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public speakers = [{
    id: 'manfred',
    img: '/assets/speakers/manfred.jpg',
    title: 'Sustainable Angular architectures with strategic domain driven design and monorepos',
    author: 'Manfred Steyer',
  }, {
    id: 'juri',
    img: '/assets/speakers/juri.png',
    title: 'Enterprise Grade Angular Reactive Forms',
    author: 'Juri Strumpflohner',
  }, {
    id: 'amir',
    img: '/assets/speakers/amir.jpg',
    title: 'Reliably End-to-End Testing Angular Applications',
    author: 'Amir Rustamzadeh',
  }, {
    id: 'max',
    img: '/assets/speakers/max.jpg',
    title: 'The Secrets Behind Angular’s Lightning Speed',
    author: 'Max Koretskyi',
  }, {
    id: 'philippe',
    img: '/assets/speakers/philippe.jpeg',
    title: 'Authentication with OpenID Connect in Angular applications',
    author: 'Philippe De Ryck',
  }, {
    id: 'michaeljanniklas',
    img: '/assets/speakers/michael-janniklas.jpg',
    title: 'Tackling component-state reactively',
    multi: true,
    author: 'Michael Hladky & Jan-Niklas Wortmann',
  }, {
    id: 'anasherry',
    img: '/assets/speakers/ana-sherry.jpg',
    title: 'Exploring Web VR',
    multi: true,
    author: 'Ana Cidre & Sherry List',
  }, {
    id: 'bonniesam',
    multi: true,
    img: '/assets/speakers/bonnie-sam.jpg',
    title: 'Dev up!',
    author: 'Bonnie & Samantha Brennan',
  }, {
    id: 'isaac',
    img: '/assets/speakers/isaac.jpg',
    title: 'E2E Testing at Half the Cost',
    author: 'Isaac Mann',
  }, {
    id: 'dominic',
    img: '/assets/speakers/dominic.jpg',
    title: 'TBD',
    author: 'Dominic Elm',
  }];

  public sponsors = [{
    id: 'ordina',
    img: '/assets/sponsors/ordina.png',
    level: 'Platinum',
    name: 'Ordina',
  }, {
    id: 'arhs',
    img: '/assets/sponsors/arhs.png',
    level: 'Gold',
    name: 'Ordina',
  }, {
    id: 'sofico',
    img: '/assets/sponsors/sofico.png',
    level: 'Gold',
    name: 'Sofico',
  }, {
    id: 'axxes',
    img: '/assets/sponsors/axxes.png',
    level: 'Gold',
    name: 'Axxes',
  }, {
    id: 'ctg',
    img: '/assets/sponsors/ctg.png',
    level: 'Silver',
    name: 'CTG',
  }, {
    id: 'colruyt',
    img: '/assets/sponsors/colruyt.png',
    level: 'Silver',
    name: 'Colruyt Group',
  }, {
    id: 'adneom',
    img: '/assets/sponsors/adneom.png',
    level: 'Silver',
    name: 'Adneom',
  }, {
    id: 'loqutus',
    img: '/assets/sponsors/loqutus.png',
    level: 'Silver',
    name: 'LoQutus',
  }, {
    id: 'microsoft',
    img: '/assets/sponsors/microsoft.png',
    level: 'Silver',
    name: 'Microsoft',
  }, {
    id: 'awv',
    img: '/assets/sponsors/awv.png',
    level: 'Bronze',
    name: 'AWV',
  }, {
    id: 'showpad',
    img: '/assets/sponsors/showpad.png',
    level: 'Bronze',
    name: 'Showpad',
  }, {
    id: 'u2u',
    img: '/assets/sponsors/u2u.png',
    level: 'Bronze',
    name: 'U2U',
  }, {
    id: 'medispring',
    img: '/assets/sponsors/medispring.png',
    level: 'Bronze',
    name: 'Medispring',
  }, {
    id: 'Intersoft',
    img: '/assets/sponsors/intersoft.png',
    level: 'Bronze',
    name: 'Intersoft',
  }, {
    id: 'cleverbit',
    img: '/assets/sponsors/cleverbit.png',
    level: 'Bronze',
    name: 'Cleverbit Software',
  }, {
    id: 'cypress',
    img: '/assets/sponsors/cypress.png',
    level: 'Bronze',
    name: 'Cypress.io',
  }];

}
