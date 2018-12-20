import { ServerModule } from '@angular/platform-server';
import { NgModule } from '@angular/core';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    ServerModule,
    AppModule,
    ModuleMapLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppServerModule { }
