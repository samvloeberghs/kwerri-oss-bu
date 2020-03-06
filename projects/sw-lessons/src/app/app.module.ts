import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Angulartics2Module } from 'angulartics2';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EnvironmentService } from './services/environment.service';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MaterialModule } from './shared/material.module';
import { NewVersionAvailableComponent } from './components/new-version-available/new-version-available.component';
import { WINDOW_PROVIDERS } from './providers/window.provider';
import { NAVIGATOR_PROVIDERS } from './providers/navigator.provider';
import { ApplicationOfflineComponent } from './components/application-offline/application-offline.component';
import { InstallApplicationComponent } from './components/install-application/install-application.component';

export function initApp(environmentService: EnvironmentService) {
  return () => environmentService.isEnvironmentReady().catch(e => console.log('Could not initialize application', e));
}

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NewVersionAvailableComponent,
    ApplicationOfflineComponent,
    InstallApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Angulartics2Module.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    ...WINDOW_PROVIDERS,
    ...NAVIGATOR_PROVIDERS,
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [EnvironmentService],
      multi: true,
    },
  ],
  entryComponents: [
    NewVersionAvailableComponent,
    ApplicationOfflineComponent,
    InstallApplicationComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
