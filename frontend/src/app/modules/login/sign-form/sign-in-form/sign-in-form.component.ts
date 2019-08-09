import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { LoginService } from '../../login.service';
import { LoginFormInterface } from '../../login.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['../sign-form.scss']
})
export class SignInFormComponent implements LoginFormInterface {
  form: FormGroup;
  redirectFormType = 'sign-up';

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  onChangeForm() {
    this.loginService.changeLoginFom(this.redirectFormType);
  }

  async onSubmit() {
    //  TODO: add additional logic related to backend;
    this.loginService.login();
    await this.router.navigate(['/users']);

    this.form.reset();
  }
}
