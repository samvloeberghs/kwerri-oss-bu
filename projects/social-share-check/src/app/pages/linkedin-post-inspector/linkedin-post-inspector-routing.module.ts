import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { environment } from '../../../environments/environment';
import { LinkedinPostInspectorComponent } from './linkedin-post-inspector.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LinkedinPostInspectorComponent,
        data: {
          seo: {
            title: `LinkedIn Post Inspector - ${environment.seo.title}`,
            description: ``,
            shareImg: '/assets/share/linkedinpostinspector.png',
          },
        },
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class LinkedinPostInspectorRoutingModule {
}
