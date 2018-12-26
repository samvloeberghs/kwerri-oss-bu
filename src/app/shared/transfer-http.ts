import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable()
export class TransferHttp {
  constructor(
    private http: HttpClient,
    protected transferState: TransferState,
  ) {
  }

  /**
   * Performs a request with `get` http method.
   */
  get(url: string, options: any): Observable<any> {
    return this.getData(url, options, (gdUrl: string, gdOptions: any) => {
      return this.http.get(gdUrl, gdOptions);
    });
  }

  /**
   * Performs a request with `post` http method.
   */
  post(url: string, body: any): Observable<any> {
    return this.http.post(url, body);
  }

  /**
   * Performs a request with `put` http method.
   */
  put(url: string, body: any): Observable<any> {
    return this.http.put(url, body);
  }

  /**
   * Performs a request with `delete` http method.
   */
  delete(url: string): Observable<any> {
    return this.http.delete(url);
  }

  private getData(url: string, options: any, callback: (uri: string, options: any) => Observable<any>) {

    const key = makeStateKey(url);
    console.log('url', url);
    console.log('key', key);

    if (this.hasCache(key)) {
      return this.getFromCache(key);
    } else {
      return callback(url, options).pipe(
        tap(data => {
          console.log('data from remote');
          this.setCache(key, data);
        }),
      );
    }
  }

  private hasCache(key) {
    return this.transferState.hasKey(key);
  }

  private setCache(key, data) {
    return this.transferState.set(key, data);
  }

  private getFromCache(key): any {
    const data = this.transferState.get(key, null);
    console.log('data from cache');
    return from(Promise.resolve(data));
  }
}
