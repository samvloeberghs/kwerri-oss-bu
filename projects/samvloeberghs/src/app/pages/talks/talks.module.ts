import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalksRoutingModule } from './talks-routing.module';
import { TalksComponent } from './talks.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TalksRoutingModule,
    SharedModule
  ],
  declarations: [
    TalksComponent
  ]
})
export class TalksModule { }
