import { Component, OnInit } from '@angular/core';

import { Post } from './post';
import { PostsService } from './';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styles: [
    require('./posts.component.scss')
  ],
})
export class PostsComponent {

  posts: Post[];
  error: any;

  constructor(private postsService: PostsService) {
    this.postsService
      .getPosts()
      .then(posts => this.posts = posts)
      .catch(error => this.error = error);
  }

}
