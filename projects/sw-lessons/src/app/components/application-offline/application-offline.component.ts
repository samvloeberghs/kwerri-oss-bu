import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'swl-application-offline',
  styleUrls: ['./application-offline.components.scss'],
  templateUrl: './application-offline.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicationOfflineComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public readonly matDialogRef: MatDialogRef<any>) {

  }

  public close($event: Event): void {
    $event.preventDefault();
    this.matDialogRef.close();
  }

}
