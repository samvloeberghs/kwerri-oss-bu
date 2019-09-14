import { Component } from '@angular/core';
import { Store, set, del } from 'idb-keyval';

import { EnvironmentService } from './environment.service';

@Component({
  selector: 'swl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public readonly applicationUpdateOngoing$ = this.environmentService.applicationUpdateOngoing$;
  public readonly newVersionAvailable$ = this.environmentService.newVersionAvailable$;
  public currentOAuthToken;
  public mapTile: string;

  constructor(private readonly environmentService: EnvironmentService) {

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

  public loadMapTile(): void  {
    this.mapTile = `/assets/map.png?t=${Date.now()}`;
  }

  public unloadMapTile(): void  {
    this.mapTile = undefined;
  }

  public loadNewVersion(): void  {
    this.environmentService.update();
  }

  public checkForUpdate(): void {
    this.environmentService.checkForUpdate();
  }

}
