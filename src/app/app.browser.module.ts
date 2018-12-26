import { NgModule } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    AppModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserTransferStateModule
  ],
  bootstrap: [AppComponent],
})
export class AppBrowserModule {
}
