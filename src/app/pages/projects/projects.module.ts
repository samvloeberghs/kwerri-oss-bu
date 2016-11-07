import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';
import { ProjectsComponent, ProjectsRoutingModule } from './';

@NgModule({
  imports: [
    SharedModule,
    ProjectsRoutingModule
  ],
  declarations: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
