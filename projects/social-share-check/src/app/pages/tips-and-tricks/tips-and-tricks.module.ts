import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipsAndTricksRoutingModule } from './tips-and-tricks-routing.module';
import { TipsAndTricksComponent } from './tips-and-tricks.component';

@NgModule({
  imports: [
    CommonModule,
    TipsAndTricksRoutingModule
  ],
  declarations: [
    TipsAndTricksComponent
  ]
})
export class TipsAndTricksModule { }
