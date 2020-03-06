import { Component } from '@angular/core';
import { del, get, set, Store } from 'idb-keyval';

@Component({
  selector: 'swl-secure-map',
  styleUrls: ['./secure-map.component.scss'],
  templateUrl: './secure-map.component.html'
})
export class SecureMapComponent {

  public showMap = false;
  public currentOAuthToken: string;

  constructor() {
    this.checkOAuthToken();
  }

  public async login($event): Promise<void> {
    this.showMap = false;
    $event.preventDefault();
    this.currentOAuthToken = 'header.payload.signature';
    const customStore = new Store('swl-db', 'swl-db-store');
    try {
      await set('token', this.currentOAuthToken, customStore);
    } catch (e) {
      console.log(e);
    }
  }

  public reloadMap($event): void {
    $event.preventDefault();
    this.showMap = true;
  }

  public async logout($event): Promise<void> {
    this.showMap = false;
    $event.preventDefault();
    this.currentOAuthToken = undefined;
    const customStore = new Store('swl-db', 'swl-db-store');
    try {
      await del('token', customStore);
    } catch (e) {
      console.log(e);
    }
  }

  private async checkOAuthToken(): Promise<any> {
    const customStore = new Store('swl-db', 'swl-db-store');
    try {
      const token = await get<string>('token', customStore);
      if (Boolean(token)) {
        this.currentOAuthToken = token;
      }
    } catch (e) {
    }
  }

}
