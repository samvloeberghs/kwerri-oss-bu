import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostComponent } from './post/post.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
  ],
  declarations: [
    PostsComponent,
    PostComponent,
  ],
})
export class PostsModule {
}
