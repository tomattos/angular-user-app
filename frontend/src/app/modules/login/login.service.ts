import { Injectable, Type } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient) {}
  subject = new Subject<any>();

  changeLoginFom(type: string) {
    this.subject.next(type);
  }

  getFormName() {
    return this.subject;
  }

  login() {
    // TODO: add additional logic related to backend;
    // this.http.get()
    return true;
  }
}
