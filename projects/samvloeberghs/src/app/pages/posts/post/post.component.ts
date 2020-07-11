import { AfterViewChecked, Component, ElementRef, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { map, switchMap } from 'rxjs/operators';
import { JsonLdService, SeoSocialShareData, SeoSocialShareService } from 'ngx-seo';
import { DOCUMENT } from '@angular/common';

import { Post } from './post.model';
import { DataService } from '../../../shared/data.service';
import { environment } from '../../../../environments/environment';
import { HighlightService } from '../../../shared/highlight.service';
import { ZoomImage } from '../image-zoom/image-zoom.component';

@Component({
  selector: 'sv-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostComponent implements OnInit, AfterViewChecked {

  public post: Post;
  public error: any;
  public highlighted = false;
  public currentZoomImage: ZoomImage;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly dataService: DataService,
    private readonly seoSocialShareService: SeoSocialShareService,
    private readonly sanitizer: DomSanitizer,
    private readonly jsonLdService: JsonLdService,
    private readonly highlightService: HighlightService,
    private readonly elementRef: ElementRef,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {
  }

  ngOnInit() {
    const slug = this.route.snapshot.params['slug'];
    this.dataService
      .getData('/posts/data.json')
      .pipe(
        map((posts: Post[]): Post => {
          return posts.find((post: Post) => {
            return post.slug === slug;
          });
        }),
        switchMap((post: Post) => {
            this.post = post;
            const jsonLd = this.jsonLdService.getObject('BlogPosting', {
              name: `${post.title} - Posts - ${environment.seo.title}`,
              url: environment.url + this.router.routerState.snapshot.url,
              author: this.jsonLdService.getObject('Person', {
                name: 'Sam Vloeberghs',
              }, undefined),
              publisher: this.jsonLdService.getObject('Person', {
                name: 'Sam Vloeberghs',
              }, undefined),
              headline: post.title,
              description: post.short,
              image: `${environment.url}/${post.imgShare}`,
              dateCreated: post.publishDatetime,
              datePublished: post.publishDatetime,
              dateModified: post.updateDatetime,
            });
            this.jsonLdService.setData(jsonLd);
            const seoData: SeoSocialShareData = {
              title: `${post.title} - Posts - ${environment.seo.title}`,
              description: post.short,
              image: `${environment.url}${post.imgShare}`,
              url: environment.url + this.router.routerState.snapshot.url,
              type: 'article',
              author: post.author,
              published: post.publishDatetime,
              modified: post.updateDatetime,
            };
            this.seoSocialShareService.setData(seoData);
            return this.dataService.getDataText(`/posts/${slug}/post.html`);
          },
        ),
      )
      .subscribe(
        content => {
          this.post.content = this.sanitizer.bypassSecurityTrustHtml(content);
          this.post.toc = this.parseContentToc(content);
          setTimeout(() => {
            this.startCheckingScrollForToc(this.post.slug);
          }, 0);
        },
        error => {
          this.error = error;
          this.router.navigateByUrl('/not-found', {
            skipLocationChange: true,
          });
        },
      );
  }

  ngAfterViewChecked() {
    if (this.post && this.post.content && !this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
      this.initImageZoom();
    }
  }

  public closeImageZoom() {
    this.currentZoomImage = null;
  }

  private initImageZoom() {
    const htmlElements = this.elementRef.nativeElement.querySelectorAll('img.zoomin');

    for (let i = 0; i < htmlElements.length; i++) {
      htmlElements[i].addEventListener('click', ($event) => {
        this.currentZoomImage = {
          src: $event.target.src,
          title: $event.target.title,
        };
      });
    }
  }

  private parseContentToc(content) {
    const el = this.document.createElement('div');
    el.innerHTML = content;

    const selector = 'h2, h3, h4, h5';
    const headings: NodeListOf<HTMLElement> = el.querySelectorAll(selector);
    const toc = [];
    for (let i = 0; i < headings.length; i++) {
      if (!headings[i].id || headings[i].classList.contains('codetitle')) {
        continue;
      }
      toc.push({
        title: headings[i].title ? headings[i].title : headings[i].textContent,
        link: headings[i].id,
        active: i === 0,
        level: headings[i].tagName.toLowerCase(),
      });
    }
    return toc;
  }

  private startCheckingScrollForToc(route) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (entry.intersectionRatio > 0) {
          const previousElements = this.document.querySelectorAll(`.toc li a`);
          previousElements.forEach(previousElement => previousElement.parentElement.classList.remove('active'));
          const el = this.document.querySelector(`.toc li a[href="/posts/${route}#${id}"]`);
          el.parentElement.classList.add('active');
        }
      });
    });

    // Track all sections that have an `id` applied
    this.document.querySelectorAll('h2[id], h3[id], h4[id], h5[id]').forEach((section) => {
      observer.observe(section);
    });
  }

}
