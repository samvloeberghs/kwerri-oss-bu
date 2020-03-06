import { Component } from '@angular/core';

import { EnvironmentService } from '../../services/environment.service';

@Component({
  selector: 'swl-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
})
export class HomeComponent {

  constructor(private readonly environmentService: EnvironmentService) {
  }

  public checkForUpdate($event): void {
    $event.preventDefault();
    this.environmentService.checkForUpdate();
  }
}
