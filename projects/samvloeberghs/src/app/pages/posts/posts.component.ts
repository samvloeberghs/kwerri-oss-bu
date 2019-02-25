import { Component, OnInit } from '@angular/core';

import { Post } from './post/post.model';
import { DataService } from '../../shared/data.service';
import { map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

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
          console.log(error);
          console.log(error.headers);
          this.error = error;
        },
      );
  }

}
