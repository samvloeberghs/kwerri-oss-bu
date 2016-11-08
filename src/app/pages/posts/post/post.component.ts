import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

import { Post } from './';

declare var SyntaxHighlighter;

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styles: [
    require('./post.component.scss')
  ],
})
export class PostComponent implements OnInit, OnDestroy {

  private routeSubscription: Subscription;
  private postPath: string;
  private postContentPath: string;
  private post: Post;

  constructor(private http: Http,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      let slug = params['slug'];
      this.postPath = 'assets/posts/' + slug + '/post.json';
      this.postContentPath = 'assets/posts/' + slug + '/post.html';
      console.log(this.postPath, this.postContentPath);
      this.getPost().subscribe(val => {
        this.post = val;
        this.post.content = '';
        this.getPostContent().subscribe(val => {
          this.post.content = val;
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
