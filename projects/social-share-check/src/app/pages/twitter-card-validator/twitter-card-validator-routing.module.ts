import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { environment } from '../../../environments/environment';
import { TwitterCardValidatorComponent } from './twitter-card-validator.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: TwitterCardValidatorComponent,
        data: {
          seo: {
            title: `Twitter Card Validator - ${environment.seo.title}`,
            description: ``,
            shareImg: '/assets/share/twittercardvalidator.png',
          },
        },
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class TwitterCardValidatorRoutingModule {
}
