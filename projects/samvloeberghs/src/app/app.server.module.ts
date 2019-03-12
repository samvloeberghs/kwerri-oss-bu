import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { NgModule } from '@angular/core';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { ServerJsonLdModule } from 'ngx-sv-json-ld';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule, // <-- *Important* to have lazy-loaded routes work,
    ServerTransferStateModule,
    ServerJsonLdModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {
}
