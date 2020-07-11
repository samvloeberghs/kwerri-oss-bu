import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { Angulartics2Module } from 'angulartics2';
import { BrowserJsonLdModule } from 'ngx-seo';
import { intersectionObserverPreset, LazyLoadImageModule } from 'ng-lazyload-image';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EnvironmentService } from './shared/environment.service';

export function initApp(environmentService: EnvironmentService) {
  return () => environmentService.isEnvironmentReady().catch(e => console.log('Could not initialize application', e));
}

export function isBot(navigator, platformId) {
  return intersectionObserverPreset.isBot(navigator, platformId);
}

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    // old: BrowserModule.withServerTransition({ appId: 'sv' }),
    BrowserJsonLdModule,
    CommonModule,
    AppRoutingModule,
    Angulartics2Module.forRoot(),
    SharedModule.forRoot(),
    LazyLoadImageModule.forRoot({
      isBot,
    }),
    ScullyLibModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [EnvironmentService],
      multi: true,
    },
  ],
  exports: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
