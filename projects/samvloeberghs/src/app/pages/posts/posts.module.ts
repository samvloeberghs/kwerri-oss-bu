import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostComponent } from './post/post.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { SharedModule } from '../../shared/shared.module';
import { ImageZoomComponent } from './image-zoom/image-zoom.component';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
  ],
  declarations: [
    PostsComponent,
    PostComponent,
    ImageZoomComponent,
  ],
})
export class PostsModule {
}
