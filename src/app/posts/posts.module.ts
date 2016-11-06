import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { PostsComponent, PostsRoutingModule } from './';

@NgModule({
  imports: [
    SharedModule,
    PostsRoutingModule
  ],
  declarations: [
    PostsComponent
  ]
})
export class PostsModule { }
