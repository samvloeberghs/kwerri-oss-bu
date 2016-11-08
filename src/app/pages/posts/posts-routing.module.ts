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
      }
    ])
  ]
})
export class PostsRoutingModule { }
