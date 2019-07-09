import { Injectable, Type } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { }
  subject = new Subject<any>();

  changeLoginFom(type: string) {
    this.subject.next(type);
  }

  getFormName() {
    return this.subject;
  }
}
