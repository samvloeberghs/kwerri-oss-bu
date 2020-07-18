import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(
    private readonly http: HttpClient
  ) {
  }

  getData(file: string): Observable<any> {
    return this.http.get(`${file}`);
  }

  getDataText(file: string): Observable<any> {
    return this.http.get(`${file}`, {responseType: 'text'});
  }

}
