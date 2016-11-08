import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Post } from './post';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styles: [
    require('./posts.component.scss')
  ],
})
export class PostsComponent {

  posts: Post[];
  private postsPath = 'assets/posts/data.json';

  constructor(private http: Http) {
    this.getPosts().subscribe(val => this.posts = val);
  }

  private getPosts(): Observable<any[]> {
    return this.http.get(this.postsPath)
      .map(this.extractData);
  }

  private extractData(res: Response): Post[] {
    let body = res.json();
    return body || {};
  }

}
