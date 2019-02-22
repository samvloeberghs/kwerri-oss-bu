import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacebookSharingDebuggerComponent } from './facebook-sharing-debugger.component';
import { FacebookSharingDebuggerRoutingModule } from './facebook-sharing-debugger-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FacebookSharingDebuggerRoutingModule
  ],
  declarations: [
    FacebookSharingDebuggerComponent
  ]
})
export class FacebookSharingDebuggerModule { }
