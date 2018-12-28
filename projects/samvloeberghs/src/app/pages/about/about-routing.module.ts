import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { environment } from '../../../environments/environment';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AboutComponent,
        data: {
          metadata: {
            title: `About Sam - ${environment.seo.title}`,
            description: `I'm a 30 year old software engineer living in Belgium. At the time of writing I'm working as a senior software engineer at the Flemish government. I'm consulting a project where we are building a PWA that allows government officials to track down deficiencies in the public roads and infrastructure of the Flemish region.`,
            shareImg: 'assets/share/home.png',
          },
        },
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class AboutRoutingModule {
}
