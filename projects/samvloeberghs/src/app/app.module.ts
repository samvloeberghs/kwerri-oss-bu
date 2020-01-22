import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule, isPlatformServer } from '@angular/common';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
// import { PrebootModule } from 'preboot';
import { Angulartics2Module } from 'angulartics2';
import { BrowserJsonLdModule } from 'ngx-seo';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EnvironmentService } from './shared/environment.service';
import { intersectionObserverPreset, LazyLoadImageModule } from 'ng-lazyload-image';

export function initApp(environmentService: EnvironmentService) {
  return () => environmentService.isEnvironmentReady().catch(e => console.log('Could not initialize application', e));
}

export function isBot(navigator, platformId) {
  return isPlatformServer(platformId) ? true : intersectionObserverPreset.isBot(navigator, platformId);
}

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'sv' }),
    // PrebootModule.withConfig({ appRoot: 'sv-app' }),
    BrowserTransferStateModule,
    BrowserJsonLdModule,
    CommonModule,
    AppRoutingModule,
    Angulartics2Module.forRoot(),
    SharedModule.forRoot(),
    LazyLoadImageModule.forRoot({
      isBot,
    }),
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
