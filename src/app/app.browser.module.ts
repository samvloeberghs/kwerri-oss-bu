import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
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
