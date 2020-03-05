import { Component, OnInit } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { NavigationEnd, Router } from '@angular/router';
import { filter, shareReplay, tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

import { EnvironmentService } from './services/environment.service';
import { NewVersionAvailableComponent } from './components/new-version-available/new-version-available.component';
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

  constructor(private readonly environmentService: EnvironmentService,
              private readonly angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
              private readonly httpClient: HttpClient,
              private readonly router: Router,
              private readonly matDialog: MatDialog,
              private readonly matBottomSheet: MatBottomSheet) {
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
