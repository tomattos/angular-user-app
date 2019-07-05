import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

import { LoginService } from "src/app/login/login.service";
import { SignUpFormComponent } from "src/app/login/sign-up-form/sign-up-form.component";

@Component({
  selector: "app-sign-in-form",
  templateUrl: "./sign-in-form.component.html",
  styleUrls: ["./sign-in-form.component.scss"]
})
export class SignInFormComponent implements OnInit {
  formControlEmail = new FormControl("");
  formControlPassword = new FormControl("");

  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  changeFormHandler() {
    this.loginService.changeLoginFom(SignUpFormComponent);
  }
}
