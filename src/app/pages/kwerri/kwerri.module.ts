import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KwerriRoutingModule } from './kwerri-routing.module';
import { KwerriComponent } from './kwerri.component';

@NgModule({
  imports: [
    CommonModule,
    KwerriRoutingModule
  ],
  declarations: [
    KwerriComponent
  ]
})
export class KwerriModule { }
