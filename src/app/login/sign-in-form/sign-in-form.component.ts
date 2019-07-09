import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { LoginService } from 'src/app/login/login.service';
import { LoginForm } from '../login-form';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements LoginForm {
  form: FormGroup;
  redirectFormType = 'sign-up';

  constructor(private loginService: LoginService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  onChangeForm() {
    this.loginService.changeLoginFom(this.redirectFormType);
  }

  onSubmit() {
    // TODO: add http method to submit login form;
    console.log('submit');

    this.form.reset();
  }
}
