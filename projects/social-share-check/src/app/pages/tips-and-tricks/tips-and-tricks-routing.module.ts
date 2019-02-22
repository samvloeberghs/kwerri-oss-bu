import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TipsAndTricksComponent } from './tips-and-tricks.component';
import { environment } from '../../../environments/environment';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: TipsAndTricksComponent,
        data: {
          seo: {
            title: `Tips and Tricks - ${environment.seo.title}`,
            description: ``,
            shareImg: '/assets/share/tipsandtricks.png',
          },
        },
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class TipsAndTricksRoutingModule {
}
