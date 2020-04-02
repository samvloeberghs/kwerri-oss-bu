import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { NgModule } from '@angular/core';
import { ServerJsonLdModule } from 'ngx-seo';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    ServerJsonLdModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {
}
