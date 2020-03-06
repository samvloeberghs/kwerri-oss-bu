import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NewsComponent } from './news.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: NewsComponent
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class NewsRoutingModule {
}
