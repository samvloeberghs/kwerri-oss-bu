import { Component } from '@angular/core';

@Component({
  selector: 'app',
  styles: [`
   .active {
     background-color: gray;
     color: white;
   }
  `],
  template: `
    <nav>
      <a routerLink="/home" routerLinkActive="active">Home</a>
      <a routerLink="/posts" routerLinkActive="active">Posts</a>
      <a routerLink="/talks" routerLinkActive="active">Talks</a>
      <a routerLink="/projects" routerLinkActive="active">Projects</a>
      <a routerLink="/contact" routerLinkActive="active">Contact</a>
    </nav>

    <p>Hello Angular Universal App</p>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {

}
