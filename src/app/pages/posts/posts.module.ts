import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { PostComponent } from './post/post.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsService } from './posts.service';
import { PostsComponent } from './posts.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    PostsRoutingModule,
  ],
  providers: [
    PostsService,
  ],
  declarations: [
    PostsComponent,
    PostComponent,
  ],
})
export class PostsModule {
}
