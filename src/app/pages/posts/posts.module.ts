import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';
import { PostsComponent, PostsRoutingModule, PostsService } from './';
import { PostComponent } from './post';


@NgModule({
  imports: [
    SharedModule,
    PostsRoutingModule
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
