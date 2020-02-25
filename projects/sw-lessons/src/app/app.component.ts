import { Component, OnInit } from '@angular/core';
import { del, get, set, Store } from 'idb-keyval';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { NavigationEnd, Router } from '@angular/router';
import { filter, shareReplay, tap } from 'rxjs/operators';

import { EnvironmentService } from './services/environment.service';
import { NewVersionAvailableComponent } from './components/new-version-available/new-version-available.component';
import { MatDialog } from '@angular/material/dialog';
import { ApplicationOfflineComponent } from './components/application-offline/application-offline.component';
import { InstallApplicationComponent } from './components/install-application/install-application.component';

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
export class AppComponent implements OnInit {

  public readonly applicationUpdateOngoing$ = this.environmentService.applicationUpdateOngoing$;
  public readonly newVersionAvailable$ = this.environmentService.newVersionAvailable$.pipe(
    tap((newVersionAvailable) => {
      if (newVersionAvailable) {
        return this.openNewVersionAvailableBottomSheet();
      }
    }),
    shareReplay(1),
  );
  public readonly applicationOnline$ = this.environmentService.applicationOnline$;
  public readonly applicationInstallable$ = this.environmentService.applicationInstallable$.pipe(
    tap((applicationInstallable) => {
      if (applicationInstallable) {
        return this.openInstallApplicationBottomSheet();
      }
    }),
    shareReplay(1),
  );
  public readonly lieFiData = new BehaviorSubject<LieFiData>(undefined);
  public readonly lieFiData$ = this.lieFiData.asObservable();

  public navOpenend = false;
  public currentOAuthToken;
  public mapTile: string;
  public currentFlag: string;

  constructor(private readonly environmentService: EnvironmentService,
              private readonly angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
              private readonly httpClient: HttpClient,
              private readonly router: Router,
              private readonly matDialog: MatDialog,
              private readonly matBottomSheet: MatBottomSheet) {
    this.checkOAuthToken();
    this.angulartics2GoogleAnalytics.startTracking();
    this.router.events.pipe(
      filter(event => (event instanceof NavigationEnd)),
    ).subscribe(() => this.navOpenend = false);
  }

  ngOnInit() {

  }

  public openNewVersionAvailableBottomSheet(): void {
    this.matBottomSheet.open(NewVersionAvailableComponent, {
      hasBackdrop: false,
    });
  }

  public openInstallApplicationBottomSheet(): void {
    this.matBottomSheet.open(InstallApplicationComponent, {
      hasBackdrop: false,
    });
  }

  public showApplicationOffline($event: Event): void {
    $event.preventDefault();
    this.matDialog.open<any>(ApplicationOfflineComponent);
  }

  public async checkOAuthToken(): Promise<any> {
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

  public loadMapTile(): void {
    this.mapTile = `/assets/map.png`;
  }

  public unloadMapTile(): void {
    this.mapTile = undefined;
  }

  public install($event): void {
    $event.preventDefault();
    this.environmentService.promptInstall();
  }

  public loadNewVersion($event): void {
    $event.preventDefault();
    this.environmentService.update();
  }

  public checkForUpdate($event: Event): void {
    $event.preventDefault();
    this.environmentService.checkForUpdate();
  }

}
