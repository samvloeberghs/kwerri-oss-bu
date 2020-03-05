import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SecureMapComponent } from './secure-map.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: SecureMapComponent
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class SecureMapRoutingModule {
}
