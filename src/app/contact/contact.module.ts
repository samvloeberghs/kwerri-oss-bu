import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { ContactComponent, ContactRoutingModule } from './';

@NgModule({
  imports: [
    SharedModule,
    ContactRoutingModule
  ],
  declarations: [
    ContactComponent
  ]
})
export class ContactModule { }
