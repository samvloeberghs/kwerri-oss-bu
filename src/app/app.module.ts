import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Angulartics2Module } from 'angulartics2';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    CommonModule,
    AppRoutingModule,
    Angulartics2Module.forRoot(),
    SharedModule.forRoot()
  ],
  exports: [
    AppComponent,
  ],
})
export class AppModule {
}
