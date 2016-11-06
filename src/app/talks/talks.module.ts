import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { TalksComponent, TalksRoutingModule } from './';

@NgModule({
  imports: [
    SharedModule,
    TalksRoutingModule
  ],
  declarations: [
    TalksComponent
  ]
})
export class TalksModule { }
