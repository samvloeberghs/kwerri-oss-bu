import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { environment } from '../../../environments/environment';
import { FacebookSharingDebuggerComponent } from './facebook-sharing-debugger.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: FacebookSharingDebuggerComponent,
        data: {
          seo: {
            title: `Facebook Sharing Debugger - ${environment.seo.title}`,
            description: ``,
            shareImg: '/assets/share/facebooksharringdebugger.png',
          },
        },
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class FacebookSharingDebuggerRoutingModule {
}
