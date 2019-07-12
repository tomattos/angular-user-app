import { Component } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

import { LoginService } from "../service/login.service";
import { LoginForm } from "../interface/login-form";

@Component({
  selector: "app-sign-up-form",
  templateUrl: "./sign-up-form.component.html",
  styleUrls: ["../commonStyles/sign-form.scss"]
})
export class SignUpFormComponent implements LoginForm {
  form: FormGroup;
  redirectFormType = "sign-in";

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      email: "",
      password: ""
    });
  }

  onChangeForm() {
    this.loginService.changeLoginFom(this.redirectFormType);
  }

  onSubmit() {
    // TODO: add http method to submit login form;
    console.log("submit");

    this.form.reset();
  }
}
