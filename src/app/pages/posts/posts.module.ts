import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';
import { PostsComponent, PostsRoutingModule } from './';
import { PostComponent } from './post';

@NgModule({
  imports: [
    SharedModule,
    PostsRoutingModule
  ],
  declarations: [
    PostsComponent,
    PostComponent
  ]
})
export class PostsModule { }
