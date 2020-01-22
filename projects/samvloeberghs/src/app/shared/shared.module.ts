import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule, isPlatformServer } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { intersectionObserverPreset, LazyLoadImageModule } from 'ng-lazyload-image';

import { HighlightService } from './highlight.service';
import { HireMeComponent } from './hire-me/hire-me.component';

export function isBot(navigator, platformId) {
  return isPlatformServer(platformId) ? true : intersectionObserverPreset.isBot(navigator, platformId);
}

const MODULES = [
  CommonModule,
  RouterModule,
  HttpClientModule,
  LazyLoadImageModule.forRoot({
    isBot
  }),
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
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ...PROVIDERS,
      ],
    };
  }
}
