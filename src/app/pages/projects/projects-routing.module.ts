import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ProjectsComponent,
        data: {
          metadata: {
            title: 'Projects',
            description: `Together with some very nice people I'm involved in different kinds of personal, fun but also professional projects. They range from building software services & products, to organising conferences & meetups that build communities.`,
            shareImg: 'assets/share/projects-talksworkshops.png',
          },
        },
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class ProjectsRoutingModule {
}
