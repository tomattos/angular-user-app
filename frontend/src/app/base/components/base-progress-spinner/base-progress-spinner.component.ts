import { Component, OnInit } from '@angular/core';
import { BaseProgressSpinnerService } from './base-progress-spinner.service';

@Component({
  selector: 'app-base-progress-spinner',
  templateUrl: './base-progress-spinner.component.html',
  styleUrls: ['./base-progress-spinner.component.scss']
})
export class BaseProgressSpinnerComponent implements OnInit {
  showSpinner = false;

  constructor(private baseProgressSpinnerService: BaseProgressSpinnerService) { }

  ngOnInit() {
    this.baseProgressSpinnerService.spinnerState.subscribe(state => this.showSpinner = state);
  }

}
