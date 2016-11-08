import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PostsComponent } from './';
import { PostComponent } from './post';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'posts/:slug',
        component: PostComponent
      }
    ])
  ]
})
export class PostsRoutingModule { }
