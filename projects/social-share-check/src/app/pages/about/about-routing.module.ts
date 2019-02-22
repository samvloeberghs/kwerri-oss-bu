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
          seo: {
            title: `About Social Share Check - ${environment.seo.title}`,
            description: ``,
            shareImg: '/assets/share/about.png',
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
