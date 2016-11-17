import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isBrowser  } from 'angular2-universal';

import { Post } from './';
import { PostsService } from '../';
import { SeoService } from '../../../shared/seo.service';

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
              private postsService: PostsService,
              private seoService: SeoService) {

  }

  ngOnInit() {
    let slug = this.route.snapshot.params['slug'];
    this.postsService
      .getPost(slug)
      .then(post => {
        this.seoService.setMeta(post.title + ' - Posts', post.short, this.route.snapshot.url, post.imgShare);
        this.postsService.getPostContent(slug).then(content => {
          post.content = content;
          this.post = post;
        })
      })
      .catch(error => this.error = error);
  }

}
