import { Angulartics2Module } from 'angulartics2';
import { CommonModule } from '@angular/common';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    BrowserModule.withServerTransition({appId: 'samvloeberghs'}),
    BrowserTransferStateModule,
    CommonModule,
    AppRoutingModule,
    Angulartics2Module.forRoot(),
    SharedModule.forRoot(),
  ],
  exports: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
