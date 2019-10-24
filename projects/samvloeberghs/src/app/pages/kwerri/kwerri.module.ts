import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KwerriRoutingModule } from './kwerri-routing.module';
import { KwerriComponent } from './kwerri.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    KwerriRoutingModule,
    SharedModule
  ],
  declarations: [
    KwerriComponent
  ]
})
export class KwerriModule { }
