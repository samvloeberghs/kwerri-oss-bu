import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { KwerriComponent } from './';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'kwerri',
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
  ]
})
export class KwerriRoutingModule { }
