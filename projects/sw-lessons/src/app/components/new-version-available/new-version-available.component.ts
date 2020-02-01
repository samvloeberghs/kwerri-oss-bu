import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'swl-new-version-available',
  templateUrl: './new-version-available.component.html',
})
export class NewVersionAvailableComponent {

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
    // this.matBottomSheetRef.
  }
}
