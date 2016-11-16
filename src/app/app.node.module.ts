// Fix Material Support
import { __platform_browser_private__ } from '@angular/platform-browser';
function universalMaterialSupports(eventName: string): boolean { return Boolean(this.isCustomEvent(eventName)); }
__platform_browser_private__.HammerGesturesPlugin.prototype.supports = universalMaterialSupports;
// End Fix Material Support

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UniversalModule, isBrowser, isNode } from 'angular2-universal/node'; // for AoT we need to manually split universal packages

import { SharedModule } from './shared';
import { HomeModule } from './pages/home';
import { PostsModule } from './pages/posts';
import { TalksModule } from './pages/talks-workshops';
import { ProjectsModule } from './pages/projects';
import { AppComponent, AppRoutingModule } from './';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [
    UniversalModule, // NodeModule, NodeHttpModule, and NodeJsonpModule are included
    FormsModule,

    SharedModule,
    HomeModule,
    PostsModule,
    TalksModule,
    ProjectsModule,

    AppRoutingModule
  ],
  providers: [
    { provide: 'isBrowser', useValue: isBrowser },
    { provide: 'isNode', useValue: isNode }
  ]
})
export class MainModule {
  constructor() {}
}
