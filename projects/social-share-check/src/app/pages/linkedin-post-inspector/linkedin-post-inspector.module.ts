import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkedinPostInspectorComponent } from './linkedin-post-inspector.component';
import { LinkedinPostInspectorRoutingModule } from './linkedin-post-inspector-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LinkedinPostInspectorRoutingModule
  ],
  declarations: [
    LinkedinPostInspectorComponent
  ]
})
export class LinkedinPostInspectorModule { }
