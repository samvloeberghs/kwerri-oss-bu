import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'home', component: HomeComponent }
    ])
  ]
})
export class HomeRoutingModule { }
