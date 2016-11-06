import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { HomeComponent } from './';
import { HomeRoutingModule } from './';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
