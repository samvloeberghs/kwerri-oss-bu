import { Component, OnInit, Sanitizer, SecurityContext, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isBrowser } from 'angular2-universal';
import { DomSanitizer } from '@angular/platform-browser'

import { Post } from './';
import { PostsService } from '../';
import { SeoService } from '../../../shared/seo.service';

@Component({
  selector: 'sv-post',
  templateUrl: './post.component.html',
  styles: [
    require('./post.component.scss')
  ],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {

  post: Post;
  error: any;
  domain = 'https://samvloeberghs.be';
  isBrowser = isBrowser;

  constructor(private route: ActivatedRoute,
              private postsService: PostsService,
              private seoService: SeoService,
              private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    let slug = this.route.snapshot.params['slug'];
    this.postsService
      .getPost(slug)
      .then(post => {
        this.post = post;
        this.seoService.setMeta(post.title + ' - Posts', post.short, this.route.snapshot.url, post.imgShare);
        this.postsService.getPostContent(slug).then(content => {
          this.post.content = this.sanitizer.bypassSecurityTrustHtml(content);
        })
      })
      .catch(error => this.error = error);
  }

}
