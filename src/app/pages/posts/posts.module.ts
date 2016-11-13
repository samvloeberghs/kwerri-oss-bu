import { NgModule } from '@angular/core';
import { DisqusModule } from 'angular2-disqus';

import { SharedModule } from '../../shared';
import { PostsComponent, PostsRoutingModule, PostsService } from './';
import { PostComponent } from './post';

@NgModule({
  imports: [
    SharedModule,
    PostsRoutingModule,
    DisqusModule
  ],
  providers:[
    PostsService
  ],
  declarations: [
    PostsComponent,
    PostComponent
  ]
})
export class PostsModule { }
