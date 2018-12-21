import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'samvloeberghs'}),
    AppModule
  ],
  providers: [
    {provide: 'isBrowser', useValue: true},
    {provide: 'isNode', useValue: false},
  ],
  bootstrap: [AppComponent],
})
export class AppBrowserModule {
}
