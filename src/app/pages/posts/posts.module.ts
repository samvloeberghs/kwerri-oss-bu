import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightJsModule } from 'angular2-highlight-js';

import { PostComponent } from './post/post.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    HighlightJsModule,
  ],
  declarations: [
    PostsComponent,
    PostComponent,
  ],
})
export class PostsModule {
}
