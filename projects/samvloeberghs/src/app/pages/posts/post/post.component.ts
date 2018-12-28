import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { map, switchMap } from 'rxjs/operators';
import { JsonLdService } from 'jsonld';

import { Post } from './post.model';
import { SeoService } from '../../../shared/seo.service';
import { DataService } from '../../../shared/data.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'sv-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  post: Post;
  error: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService,
    private seoService: SeoService,
    private sanitizer: DomSanitizer,
    private jsonLdService: JsonLdService,
  ) {

  }

  ngOnInit() {
    const slug = this.route.snapshot.params['slug'];
    this.dataService
      .getData('posts/data.json')
      .pipe(
        map((posts: Post[]): Post => {
          return posts.find((post: Post) => {
            return post.slug === slug;
          });
        }),
        switchMap((post: Post) => {
            this.post = post;

            const jsonLd = {
              name: `${post.title} - Posts - ${environment.seo.title}`,
              url: environment.url + this.router.routerState.snapshot.url,
              author: this.jsonLdService.getObject('Author', {
                name: 'Sam Vloeberghs',
              }),
              publisher: this.jsonLdService.getObject('Publisher', {
                name: 'Sam Vloeberghs',
              }),
              image: `${environment.url}/${post.imgShare}`,
              dateCreated: post.publishDatetime,
              datePublished: post.publishDatetime,
              dateModified: post.updateDatetime,
            };
            this.jsonLdService.setData('Article', jsonLd);

            this.seoService.setMeta(
              `${post.title} - Posts - ${environment.seo.title}`,
              post.short,
              post.imgShare,
              this.router.routerState.snapshot.url,
              'article',
              post.author,
              '',
              post.publishDatetime,
              post.updateDatetime,
            );
            return this.dataService.getDataText(`posts/${slug}/post.html`);
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
