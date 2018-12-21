import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from './post/post.model';
import { PostsService } from './posts.service';
import { SeoService } from '../../shared/seo.service';

@Component({
  selector: 'sv-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {

  posts: Post[];
  error: any;

  constructor(private postsService: PostsService,
              private route: ActivatedRoute,
              private seoService: SeoService) {

    const meta: any = route.snapshot.data['metadata'];
    if (meta) {
      seoService.setMeta(meta.title, meta.description, route.snapshot.url.join('/'), meta.shareImg);
    } else {
      seoService.setMeta();
    }

    this.postsService
      .getPosts()
      .then(posts => this.posts = posts)
      .catch(error => this.error = error);
  }

}
