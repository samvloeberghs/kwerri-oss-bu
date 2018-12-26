import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    AppModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  bootstrap: [AppComponent],
})
export class AppBrowserModule {
}
