import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { TalksRoutingModule } from './talks-routing.module';
import { TalksComponent } from './talks.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    TalksRoutingModule
  ],
  declarations: [
    TalksComponent
  ]
})
export class TalksModule { }
