import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PostsComponent } from '.';

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
