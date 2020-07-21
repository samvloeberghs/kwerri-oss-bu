import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sv-kwerri',
  templateUrl: './kwerri.component.html',
  styleUrls: ['./kwerri.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class KwerriComponent {

  generalConditionsShown = false;

  toggleGeneralConditionsShown($event) {
    $event.preventDefault();
    this.generalConditionsShown = !this.generalConditionsShown;
  }

}
