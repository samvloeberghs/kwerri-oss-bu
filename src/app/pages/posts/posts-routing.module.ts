import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PostsComponent } from './';
import { PostComponent } from './post';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'posts',
        component: PostsComponent,
        data : {
          metadata : {
            title : 'Posts',
            description : 'Whenever I find the time, I try to write down what I\'ve been working in. Here you can find all of my posts.',
            shareImg: 'assets/share/posts.jpg'
          }
        }
      },
      {
        path: 'posts/:slug',
        component: PostComponent,
        data : {
          metadata : {
            title : 'Posts',
            description : 'Whenever I find the time, I try to write down what I\'ve been working in. Here you can find all of my posts.'
          }
        }
      }
    ])
  ]
})
export class PostsRoutingModule { }
