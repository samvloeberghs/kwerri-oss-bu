import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { map, switchMap } from 'rxjs/operators';
import { JsonLdService } from 'jsonld';
import { SeoData, SeoService } from 'seo';

import { Post } from './post.model';
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
              author: this.jsonLdService.getObject('Person', {
                name: 'Sam Vloeberghs',
              }),
              publisher: this.jsonLdService.getObject('Person', {
                name: 'Sam Vloeberghs',
              }),
              headline: post.title,
              description: post.short,
              image: `${environment.url}/${post.imgShare}`,
              dateCreated: post.publishDatetime,
              datePublished: post.publishDatetime,
              dateModified: post.updateDatetime,
            };
            this.jsonLdService.setData('BlogPosting', jsonLd);
            const seoData: SeoData = {
              title: `${post.title} - Posts - ${environment.seo.title}`,
              description: post.short,
              image: `${environment.url}/${post.imgShare}`,
              url: environment.url + this.router.routerState.snapshot.url,
              type: 'article',
              author: post.author,
              published: post.publishDatetime,
              modified: post.updateDatetime,
            };
            this.seoService.setData(seoData);
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
