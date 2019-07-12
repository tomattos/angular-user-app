import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { LoginService } from "../service/login.service";
import { LoginForm } from "../interface/login-form";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-in-form",
  templateUrl: "./sign-in-form.component.html",
  styleUrls: ["../commonStyles/sign-form.scss"]
})
export class SignInFormComponent implements LoginForm {
  form: FormGroup;
  redirectFormType = "sign-up";

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
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
    //  TODO: add additional logic related to backend;
    this.loginService.login();
    this.router.navigate(["/users"]);

    this.form.reset();
  }
}
