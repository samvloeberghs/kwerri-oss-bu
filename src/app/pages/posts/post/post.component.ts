import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { switchMap } from 'rxjs/operators';

import { Post } from './post.model';
import { PostsService } from '../posts.service';
import { SeoService } from '../../../shared/seo.service';

@Component({
  selector: 'sv-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  post: Post;
  error: any;

  // domain = 'https://samvloeberghs.be';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsService: PostsService,
    private seoService: SeoService,
    private sanitizer: DomSanitizer,
  ) {

  }

  ngOnInit() {
    const slug = this.route.snapshot.params['slug'];
    this.postsService
      .getPost(slug)
      .pipe(
        switchMap((post: Post) => {
            this.post = post;
            this.seoService.setMeta(post.title + ' - Posts', post.short, post.imgShare, this.router.routerState.snapshot.url);
            return this.postsService.getPostContent(slug);
          },
        ),
      )
      .subscribe(
        content => {
          this.post.content = this.sanitizer.bypassSecurityTrustHtml(content);
        },
        error => {
          this.error = error;
        },
      );
  }

}
