import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Post } from './post/post.model';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'sv-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {

  public readonly posts$: Observable<Post[]> = this.dataService
    .getData('/posts/data.json')
    .pipe(
      map(response => response as Post[]),
      tap({
        error: (_: HttpErrorResponse) => {
          this.router.navigateByUrl('/not-found');
        },
      }),
    );

  constructor(
    private readonly dataService: DataService,
    private readonly router: Router,
  ) {
  }

}
