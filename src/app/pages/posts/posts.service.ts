import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Post } from './post';

@Injectable()
export class PostsService {

  private postsPath = 'assets/posts/';  // URL to web api

  constructor(private http: Http) {
  }

  getPosts(): Promise<Post[]> {
    return this.http
      .get(this.postsPath + 'data.json')
      .toPromise()
      .then(response => response.json() as Post[])
      .catch(this.handleError);
  }

  getPost(slug: string): Promise<Post> {
    return this.getPosts()
      .then(posts => posts.find(post => post.slug === slug));
  }

  getPostContent(slug: string): Promise<string> {
    return this.http
      .get(this.postsPath + slug + '/post.html')
      .toPromise()
      .then(response => response.text() as string)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}