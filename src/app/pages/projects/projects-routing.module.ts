import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProjectsComponent } from './';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'projects',
        component: ProjectsComponent,
        data : {
          metadata : {
            title : 'Projects',
            description : 'Together with some very nice people I\'m involved in different kinds of personal, fun but also professional projects. These are the cool things I would like to share with you.',
            shareImg: 'assets/share/projects.jpg'
          }
        }
      }
    ])
  ]
})
export class ProjectsRoutingModule { }
