import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Data {
  version: number;
  items: Array<{
    title: string;
    short: string;
  }>;
}

@Component({
  selector: 'swl-news',
  styleUrls: ['./news.component.scss'],
  templateUrl: './news.component.html',
})
export class NewsComponent {

  public dataLoading = false;
  public readonly data$: Observable<Data>;
  private readonly dataSubject = new BehaviorSubject<Data>(undefined);

  constructor(private readonly httpClient: HttpClient) {
    this.data$ = this.dataSubject.asObservable();
    this.loadDataWithLieFiCheck();
  }

  public loadDataWithLieFiCheck($event?: Event): void {
    if ($event) {
      $event.preventDefault();
    }
    this.dataLoading = true;
    this.httpClient.get<Data>('/assets/news.json').pipe(
      tap(() => this.dataLoading = false),
    ).subscribe(d => this.dataSubject.next(d));
  }

}
