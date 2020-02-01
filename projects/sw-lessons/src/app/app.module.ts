import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Angulartics2Module } from 'angulartics2';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EnvironmentService } from './environment.service';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MaterialModule } from './shared/material.module';
import { NewVersionAvailableComponent } from './components/new-version-available/new-version-available.component';

export function initApp(environmentService: EnvironmentService) {
  return () => environmentService.isEnvironmentReady().catch(e => console.log('Could not initialize application', e));
}

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NewVersionAvailableComponent
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
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [EnvironmentService],
      multi: true
    }
  ],
  entryComponents:[
    NewVersionAvailableComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
