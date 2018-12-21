import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { KwerriRoutingModule } from './kwerri-routing.module';
import { KwerriComponent } from './kwerri.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    KwerriRoutingModule
  ],
  declarations: [
    KwerriComponent
  ]
})
export class KwerriModule { }
