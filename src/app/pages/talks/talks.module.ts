import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalksRoutingModule } from './talks-routing.module';
import { TalksComponent } from './talks.component';

@NgModule({
  imports: [
    CommonModule,
    TalksRoutingModule
  ],
  declarations: [
    TalksComponent
  ]
})
export class TalksModule { }
