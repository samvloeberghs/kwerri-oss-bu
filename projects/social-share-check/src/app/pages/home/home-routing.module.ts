import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { environment } from '../../../environments/environment';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        data: {
          seo: {
            title: environment.seo.title,
            description: `Hi there! 👋 Thank you for visiting my website! I'm a Belgium 🇧🇪 based freelance software architect and Internet entrepreneur, currently focusing on frontend technologies.`,
            shareImg: '/assets/share/home.png',
          },
        },
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class HomeRoutingModule {
}
