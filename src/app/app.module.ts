import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Angulartics2Module } from 'angulartics2';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    Angulartics2Module.forRoot(),
    SharedModule.forRoot(),
  ],
  providers: [
    {provide: 'isProd', useValue: environment.production}
  ],
  exports: [
    AppComponent,
  ],
})
export class AppModule {
}
