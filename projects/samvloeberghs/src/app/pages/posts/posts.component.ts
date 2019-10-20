import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Post } from './post/post.model';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'sv-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {

  posts: Post[];
  error: any;

  constructor(
    private readonly dataService: DataService,
    private readonly router: Router
  ) {
  }

  ngOnInit() {
    this.dataService
      .getData('/posts/data.json')
      .pipe(
        map(response => response as Post[]),
      )
      .subscribe(
        posts => this.posts = posts,
        (error: HttpErrorResponse) => {
          this.router.navigateByUrl('/not-found');
        },
      );
  }

}
