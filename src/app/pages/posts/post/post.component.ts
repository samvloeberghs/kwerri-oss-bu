import { Component, OnInit, OnDestroy, ElementRef, ViewEncapsulation } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { HighlightJsService } from 'angular2-highlight-js';
import { isBrowser } from 'angular2-universal/browser'; // for AoT we need to manually split universal packages
import {  } from '@angular/platform-browser';

import { Post } from './';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styles: [
    require('./post.component.scss')
  ],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit, OnDestroy {

  private routeSubscription: Subscription;
  private postPath: string;
  private postContentPath: string;
  private post: Post;

  constructor(private http: Http,
              private route: ActivatedRoute,
              private el: ElementRef,
              private highlightJsService: HighlightJsService) {

  }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      let slug = params['slug'];
      this.postPath = 'assets/posts/' + slug + '/post.json';
      this.postContentPath = 'assets/posts/' + slug + '/post.html';


      this.getPost().subscribe(val => {
        this.post = val;
        this.post.content = '';
        this.getPostContent().subscribe(val => {
          this.post.content = val;
          /*
          if (isBrowser) {
            this.highlightJsService.highlight(document.querySelector('.typescript'));
          }
          */
        });
      });

    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  private getPost(): Observable<any> {
    return this.http.get(this.postPath)
      .map(this.extractData);
  }

  private getPostContent(): Observable<any> {
    return this.http.get(this.postContentPath)
      .map(this.extractContentData);
  }

  private extractData(res: Response): Post {
    let body = res.json();
    return body || {};
  }

  private extractContentData(res: Response): string {
    let body = res.text();
    return body || '';
  }

}
