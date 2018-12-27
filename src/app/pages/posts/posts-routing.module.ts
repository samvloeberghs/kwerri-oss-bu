import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'posts',
        component: PostsComponent,
        data: {
          metadata: {
            title: 'Posts',
            description: `Whenever I find the time, I try to write down what I've been working on. Here you can find all of my posts.`,
            shareImg: 'assets/share/projects-talksworkshops.png',
          },
        },
      },
      {
        path: 'posts/:slug',
        component: PostComponent,
        data: {
          metadata: {
            title: 'Posts',
            description: `Whenever I find the time, I try to write down what I've been working on. Here you can find all of my posts.`,
            shareImg: 'assets/share/projects-talksworkshops.png',
          },
        },
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class PostsRoutingModule {
}
