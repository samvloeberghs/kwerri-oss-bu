import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { TransferStateService } from '@scullyio/ng-lib';

import { Post } from './post/post.model';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'sv-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostsComponent {

  public readonly posts$: Observable<Post[]> = this.transferStateService.useScullyTransferState<Post[]>(
    'posts',
    this.dataService
      .getData('/posts/data.json')
      .pipe(
        map(response => response as Post[]),
      ),
  ).pipe(
    tap({
      error: (error) => {
        console.log(error);
        this.router.navigateByUrl('/not-found');
      },
    }),
  );

  constructor(
    private readonly dataService: DataService,
    private readonly router: Router,
    private readonly transferStateService: TransferStateService,
  ) {
  }

}
