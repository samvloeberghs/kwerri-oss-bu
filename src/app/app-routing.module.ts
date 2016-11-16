import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,

      }
    ])
  ],
})
export class AppRoutingModule { }
