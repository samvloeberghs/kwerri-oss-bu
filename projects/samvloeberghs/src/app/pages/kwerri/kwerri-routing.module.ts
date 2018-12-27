import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { KwerriComponent } from './kwerri.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: KwerriComponent,
        data: {
          metadata: {
            title: 'Kwerri',
            description: 'Kwerri provides specialised consultancy in web engineering. For me personally, Kwerri acts as my own incubator, allowing me to freelance on different projects + start my own.',
            shareImg: 'assets/share/kwerri.png',
          },
        },
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class KwerriRoutingModule {
}
