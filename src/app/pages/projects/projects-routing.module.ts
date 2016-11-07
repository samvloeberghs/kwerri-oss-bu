import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProjectsComponent } from './';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'projects',
        component: ProjectsComponent
      }
    ])
  ]
})
export class ProjectsRoutingModule { }
