import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isBrowser } from 'angular2-universal';

const minify = require('html-minifier').minify;
const minifyOptions = require('./../../../../options').htmlMinifyOptions;

import { Post } from './';
import { PostsService } from '../';

const isProd = process.env.ENV === 'PROD';

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
  domain = isProd ? 'https://samvloeberghs.be' : 'https://ng2.samvloeberghs.be';
  isBrowser = isBrowser;

  constructor(private route: ActivatedRoute,
              private postsService: PostsService) {

  }

  ngOnInit() {
    let slug = this.route.snapshot.params['slug'];
    this.postsService
      .getPost(slug)
      .then(post => {
        this.postsService.getPostContent(slug).then(content => {
          post.content = minify(content, minifyOptions);
          this.post = post;
        })
      })
      .catch(error => this.error = error);
  }

}
