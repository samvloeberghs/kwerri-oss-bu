import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from './';
import { PostsService } from '../';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styles: [
    require('./post.component.scss')
  ],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {

  post: Post;
  error: any;

  constructor(private route: ActivatedRoute,
              private postsService: PostsService) {
  }

  ngOnInit() {
    let slug = this.route.snapshot.params['slug'];
    this.postsService
      .getPost(slug)
      .then(post => this.post = post)
      .catch(error => this.error = error);
  }

}
