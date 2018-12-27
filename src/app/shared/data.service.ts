import { Injectable } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable()
export class DataService {

  private path = `${environment.url}/assets/`;

  constructor(
    private http: HttpClient,
    private transferState: TransferState,
  ) {
  }

  getData(file: string): Observable<any> {

    const key = makeStateKey(file);
    if (this.transferState.hasKey(key)) {
      return of(this.transferState.get(key, null));
    }
    return this.http
      .get(`${this.path}${file}`)
      .pipe(
        tap(response => this.transferState.set(key, response)),
      );

  }

  getDataText(file: string): Observable<any> {

    const key = makeStateKey(file);
    if (this.transferState.hasKey(key)) {
      return of(this.transferState.get(key, null));
    }
    return this.http
      .get(`${this.path}${file}`, {responseType: 'text'})
      .pipe(
        tap(response => this.transferState.set(key, response)),
      );

  }

}
