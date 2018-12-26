import { Component, HostListener } from '@angular/core';

import { Routehelper } from './shared/routehelper.service';
import { TransferHttp } from './shared/transfer-http';
import { Post } from './pages/posts/post/post.model';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';

@Component({
  selector: 'sv-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  mobileNavToggled = false;
  posts: any;
  private postsPath = `${environment.url}/assets/posts/`;

  constructor(
    private routehelper: Routehelper,
    private http: TransferHttp,
  ) {
    this.http
      .get(`${this.postsPath}data.json`, {})
      .pipe(
        map(response => response as Post[]),
      ).subscribe(
      posts => this.posts = posts,
    );
  }

  toggleMobileNav(event?: any, block = false) {
    this.mobileNavToggled = !this.mobileNavToggled;
    if (block) {
      event.preventDefault();
    }
  }

  navigateMobile() {
    this.toggleMobileNav();
  }

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.routehelper.keyboardNavigate(event.key);
  }

}
