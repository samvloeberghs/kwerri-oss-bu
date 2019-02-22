import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwitterCardValidatorComponent } from './twitter-card-validator.component';
import { TwitterCardValidatorRoutingModule } from './twitter-card-validator-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TwitterCardValidatorRoutingModule
  ],
  declarations: [
    TwitterCardValidatorComponent
  ]
})
export class TwitterCardValidatorModule { }

