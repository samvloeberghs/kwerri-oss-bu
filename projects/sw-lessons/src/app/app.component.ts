import { Component } from '@angular/core';
import { Store, set, del, get } from 'idb-keyval';

import { EnvironmentService } from './environment.service';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


export interface LieFiData {
  id: number;
  count: number;
  data: number[];
}

@Component({
  selector: 'swl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public readonly applicationUpdateOngoing$ = this.environmentService.applicationUpdateOngoing$;
  public readonly newVersionAvailable$ = this.environmentService.newVersionAvailable$;
  public readonly lieFiData = new BehaviorSubject<LieFiData>(undefined);

  public currentOAuthToken;
  public mapTile: string;
  public currentFlag: string;
  public readonly lieFiData$ = this.lieFiData.asObservable();

  constructor(private readonly environmentService: EnvironmentService,
              private readonly angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
              private readonly httpClient: HttpClient) {
    this.checkOAuthToken();
    this.angulartics2GoogleAnalytics.startTracking();
  }

  public async checkOAuthToken(): Promise<any> {
    this.currentOAuthToken = 'header.payload.signature';
    const customStore = new Store('swl-db', 'swl-db-store');
    try {
      const token = await get('token', customStore);
      if (Boolean(token)) {
        this.currentOAuthToken = token;
      }
    } catch (e) {
    }
  }

  public async setOAuthToken(): Promise<any> {
    this.currentOAuthToken = 'header.payload.signature';
    const customStore = new Store('swl-db', 'swl-db-store');
    await set('token', this.currentOAuthToken, customStore);
  }

  public async unsetOAuthToken(): Promise<any> {
    this.currentOAuthToken = undefined;
    const customStore = new Store('swl-db', 'swl-db-store');
    await del('token', customStore);
  }

  public loadFlag($event): void {
    if (!$event.target.value) {
      this.currentFlag = undefined;
      return;
    }
    this.currentFlag = `/assets/flags/${$event.target.value}.png`;
  }

  public loadDataWithLieFiCheck(): void {
    this.httpClient.get<LieFiData>('/assets/data.json').subscribe(d => this.lieFiData.next(d));
  }

  public loadMapTile(): void {
    this.mapTile = `/assets/map.png`;
  }

  public unloadMapTile(): void {
    this.mapTile = undefined;
  }

  public loadNewVersion(): void {
    this.environmentService.update();
  }

  public checkForUpdate(): void {
    this.environmentService.checkForUpdate();
  }

}
