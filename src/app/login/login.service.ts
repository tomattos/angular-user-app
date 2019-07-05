import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { SignInFormComponent } from "src/app/login/sign-in-form/sign-in-form.component";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor() {}
  subject = new Subject<any>();

  changeLoginFom(component) {
    this.subject.next(component);
  }

  getFormName() {
    this.subject.next(SignInFormComponent);
    return this.subject;
  }
}
