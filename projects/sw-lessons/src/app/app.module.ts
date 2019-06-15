import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EnvironmentService } from './environment.service';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export function initApp(environmentService: EnvironmentService) {
  return () => environmentService.isEnvironmentReady().catch(e => console.log('Could not initialize application', e));
}

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [EnvironmentService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
