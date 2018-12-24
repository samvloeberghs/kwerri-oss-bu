import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TalksComponent } from './talks.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: TalksComponent,
        data : {
          metadata : {
            title : 'Talks and workshops',
            description : `Mostly I share the things I do for the projects I'm involved in, but it can also just be a good incentive to learn in-depth about a specific technology.`,
            shareImg: 'assets/share/talksworkshops.jpg'
          }
        }
      }
    ])
  ],
  exports: [
    RouterModule,
  ],
})
export class TalksRoutingModule { }
