import { Injectable } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(
    private readonly http: HttpClient,
    private readonly transferState: TransferState,
  ) {
  }

  getData(file: string): Observable<any> {

    const key = makeStateKey(file);
    if (this.transferState.hasKey(key)) {
      return of(this.transferState.get(key, null));
    }
    return this.http
      .get(`${environment.url}${file}`)
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
      .get(`${environment.url}${file}`, {responseType: 'text'})
      .pipe(
        tap(response => this.transferState.set(key, response)),
      );

  }

}
