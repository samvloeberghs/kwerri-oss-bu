import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { PrebootModule } from 'preboot';
import { Angulartics2Module } from 'angulartics2';
import { BrowserJsonLdModule } from 'ngx-seo';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'samvloeberghs'}),
    PrebootModule.withConfig({ appRoot: 'sv-app' }),
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
