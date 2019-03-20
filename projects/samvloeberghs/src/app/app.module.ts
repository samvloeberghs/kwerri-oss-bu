import { Angulartics2Module } from 'angulartics2';
import { CommonModule } from '@angular/common';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserJsonLdModule } from 'ngx-seo';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'samvloeberghs'}),
    BrowserTransferStateModule,
    BrowserJsonLdModule,
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
