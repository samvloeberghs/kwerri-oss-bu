import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Angulartics2Module } from 'angulartics2';

import { HomeComponent } from './pages/home';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      }
    ]),
    Angulartics2Module.forRoot()
  ],
})
export class AppRoutingModule { }
