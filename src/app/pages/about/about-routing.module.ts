import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AboutComponent,
        data : {
          metadata : {
            title : 'About me',
            description : '',
            shareImg: 'assets/share/about.jpg'
          }
        }
      }
    ])
  ]
})
export class AboutRoutingModule { }
