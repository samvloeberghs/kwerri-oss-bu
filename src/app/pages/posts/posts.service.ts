import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Post } from './post';

@Injectable()
export class PostsService {

  private postsPath = 'assets/posts/data.json';  // URL to web api

  constructor(private http: Http) { }

  getPosts(): Promise<Post[]> {
    return this.http
      .get(this.postsPath)
      .toPromise()
      .then(response => response.json() as Post[])
      .catch(this.handleError);
  }

  getPost(slug: string): Promise<Post> {
    return this.getPosts()
      .then(posts => posts.find(post => post.slug === slug));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}