import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styles: [
    require('./posts.component.scss')
  ],
})
export class PostsComponent {

  posts: any[];
  private postsPath = 'assets/posts/data.json';

  constructor(private http: Http) {
    this.getPosts().subscribe(val => this.posts = val);
  }

  getPosts(): Observable<any[]> {
    return this.http.get(this.postsPath)
      .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

}
