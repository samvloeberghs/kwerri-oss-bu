import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './post/post.model';

@Injectable()
export class PostsService {

  private postsPath: string;

  constructor(@Inject('isProd') private isProd: boolean,
              private http: HttpClient) {

    // URL to web api
    this.postsPath = (this.isProd ? 'https://samvloeberghs.be/' : '') + 'assets/posts/';
  }

  getPosts(): Promise<Post[]> {

    return this.http
      .get(this.postsPath + 'data.json')
      .toPromise()
      .then(response => response as Post[])
      .catch(this.handleError);
  }

  getPost(slug: string): Promise<Post> {
    return this.getPosts()
      .then(posts => posts.find(post => post.slug === slug));
  }

  getPostContent(slug: string): Promise<string> {
    return this.http
      .get(this.postsPath + slug + '/post.html', {responseType: 'text'})
      .toPromise()
      .then(response => response as string)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', JSON.stringify(error));
    return Promise.reject(error.message || error);
  }

}