import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureMapRoutingModule } from './secure-map-routing.module';
import { SecureMapComponent } from './secure-map.component';
import { MaterialModule } from '../../shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    SecureMapRoutingModule,
    MaterialModule,
  ],
  declarations: [
    SecureMapComponent
  ]
})
export class SecureMapModule { }
