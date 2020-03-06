import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';

import { EnvironmentService } from '../../services/environment.service';

@Component({
  selector: 'swl-install-application',
  styleUrls: ['./install-application.components.scss'],
  templateUrl: './install-application.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstallApplicationComponent {

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    public readonly matBottomSheetRef: MatBottomSheetRef,
    private readonly environmentService: EnvironmentService) {

  }

  public close($event: Event): void {
    $event.preventDefault();
    this.matBottomSheetRef.dismiss();
  }

  public install($event: Event): void {
    $event.preventDefault();
    this.matBottomSheetRef.dismiss(true);
    this.environmentService.promptInstall();
  }
}
