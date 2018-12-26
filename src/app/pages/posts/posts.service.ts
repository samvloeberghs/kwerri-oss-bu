import { Injectable } from '@angular/core';

import { Post } from './post/post.model';
import { environment } from '../../../environments/environment';
import { TransferHttp } from '../../shared/transfer-http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PostsService {

  private postsPath = `${environment.url}/assets/posts/`;

  constructor(
    private http: TransferHttp,
  ) {
  }

  getPosts(): Observable<Post[]> {

    return this.http
      .get(`${this.postsPath}data.json`, {})
      .pipe(
        map(response => response as Post[]),
      );

  }

  getPost(slug: string): Observable<Post> {
    return this.getPosts()
      .pipe(
        map((posts: Post[]): Post => {
          return posts.find((post: Post) => {
            return post.slug === slug;
          });
        }),
      );
  }

  getPostContent(slug: string): Observable<string> {
    return this.http
      .get(`${this.postsPath}${slug}/post.html`, {responseType: 'text'})
      .pipe(
        map(response => response as string),
      );

  }

}
