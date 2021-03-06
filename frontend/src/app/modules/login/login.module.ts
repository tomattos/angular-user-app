import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../libs/material/material.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SignInFormComponent } from './sign-form/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './sign-form/sign-up-form/sign-up-form.component';
import { LoginFormDirective } from './directive/login-form.directive';

@NgModule({
  declarations: [
    LoginComponent,
    SignInFormComponent,
    SignUpFormComponent,
    LoginFormDirective
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  entryComponents: [SignInFormComponent, SignUpFormComponent]
})
export class LoginModule {}
