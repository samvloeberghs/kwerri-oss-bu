import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HighlightService } from './highlight.service';
import { HireMeComponent } from './hire-me/hire-me.component';

const MODULES = [
  CommonModule,
  RouterModule,
  HttpClientModule
];

const PIPES = [
  // put pipes here
];

const COMPONENTS = [
  HireMeComponent,
];

const PROVIDERS = [
  HighlightService,
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
  exports: [
    ...PIPES,
    ...COMPONENTS,
    ...MODULES,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        ...PROVIDERS,
      ],
    };
  }
}
