import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactComponent } from '.';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'contact',
        component: ContactComponent
      }
    ])
  ]
})
export class ContactRoutingModule { }
