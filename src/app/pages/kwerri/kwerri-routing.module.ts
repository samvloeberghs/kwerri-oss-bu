import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { KwerriComponent } from './kwerri.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: KwerriComponent,
        data : {
          metadata : {
            title : 'Kwerri',
            description : 'I operate profesionally trough the company Kwerri BVBA',
            shareImg: 'assets/share/kwerri.jpg'
          }
        }
      }
    ])
  ],
  exports: [
    RouterModule,
  ],
})
export class KwerriRoutingModule { }
