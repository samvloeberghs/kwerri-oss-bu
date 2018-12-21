import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { Post } from './post.model';
import { PostsService } from '../posts.service';
import { SeoService } from '../../../shared/seo.service';

@Component({
  selector: 'sv-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {

  post: Post;
  error: any;
  domain = 'https://samvloeberghs.be';

  constructor(@Inject('isBrowser') public isBrowser: boolean,
              private route: ActivatedRoute,
              private postsService: PostsService,
              private seoService: SeoService,
              private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    const slug = this.route.snapshot.params['slug'];
    this.postsService
      .getPost(slug)
      .then(post => {
        this.post = post;
        this.seoService.setMeta(post.title + ' - Posts', post.short, this.route.snapshot.url.join('/'), post.imgShare);
        this.postsService.getPostContent(slug).then(content => {
          this.post.content = this.sanitizer.bypassSecurityTrustHtml(content);
        });
      })
      .catch(error => this.error = error);
  }

}
