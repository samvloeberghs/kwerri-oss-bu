import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TalksComponent } from '.';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'talks',
        component: TalksComponent
      }
    ])
  ]
})
export class TalksRoutingModule { }
