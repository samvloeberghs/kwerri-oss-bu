import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TransferStateService } from '@scullyio/ng-lib';

import { DataService } from '../../shared/data.service';
import { Post } from '../posts/post/post.model';

@Component({
  selector: 'sv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {

  public readonly lastPost$: Observable<Post> = this.transferStateService.useScullyTransferState<Post>(
    'lastPost',
    this.dataService
      .getData('/posts/data.json')
      .pipe(
        map(response => response[0] as Post),
      ),
  );

  constructor(
    private readonly dataService: DataService,
    private readonly transferStateService: TransferStateService,
  ) {
  }

}
