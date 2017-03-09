import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';
import { KwerriComponent, KwerriRoutingModule } from './';

@NgModule({
  imports: [
    SharedModule,
    KwerriRoutingModule
  ],
  declarations: [
    KwerriComponent
  ]
})
export class KwerriModule { }
