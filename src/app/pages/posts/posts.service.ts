import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './post/post.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class PostsService {

  private postsPath: string;

  constructor(
    private http: HttpClient,
  ) {
  }

  getPosts(): Promise<Post[]> {

    return this.http
      .get(environment.url + '/assets/posts/data.json')
      .toPromise()
      .then(response => response as Post[])
      .catch(this.handleError);
  }

  getPost(slug: string): Promise<Post> {
    return this.getPosts()
      .then((posts: Post[]) => {
        return posts.find((post: Post) => {
          return post.slug === slug;
        });
      });
  }

  getPostContent(slug: string): Promise<string> {
    return this.http
      .get(environment.url + '/assets/posts/' + slug + '/post.html', {responseType: 'text'})
      .toPromise()
      .then(response => response as string)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', JSON.stringify(error));
    return Promise.reject(error.message || error);
  }

}
