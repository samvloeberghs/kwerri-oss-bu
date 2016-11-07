import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';
import { HomeComponent } from './';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
