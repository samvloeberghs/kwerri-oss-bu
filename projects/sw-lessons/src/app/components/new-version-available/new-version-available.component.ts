import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { EnvironmentService } from '../../environment.service';

@Component({
  selector: 'swl-new-version-available',
  styleUrls: ['./new-version-available.components.scss'],
  templateUrl: './new-version-available.component.html',
})
export class NewVersionAvailableComponent {

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    public readonly bottomSheetRef: MatBottomSheetRef,
    private readonly environmentService: EnvironmentService) {

  }

  public close($event: Event): void {
    $event.preventDefault();
    this.bottomSheetRef.dismiss();
  }

  public update($event: Event): void {
    $event.preventDefault();
    this.bottomSheetRef.dismiss(true);
    this.environmentService.update();
  }
}
