import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseProgressSpinnerService {
  spinnerState = new BehaviorSubject<boolean>(false);

  constructor() { }

  toggleSpinner() {
    const prevValue = this.spinnerState.getValue();
    this.spinnerState.next(!prevValue);
  }
}
