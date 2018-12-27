import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

const MODULES = [
  CommonModule,
  RouterModule,
  HttpClientModule,
  HighlightJsModule,
];

const PIPES = [
  // put pipes here
];

const COMPONENTS = [
  // put shared components here
];

const PROVIDERS = [
  HighlightJsService,
];

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...PIPES,
    ...COMPONENTS,
  ],
  providers: [
    ...PROVIDERS,
  ],
  exports: [],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ...PROVIDERS,
      ],
    };
  }
}
