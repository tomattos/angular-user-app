import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MaterialModule } from "../material/material.module";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login/login.component";
import { SignInFormComponent } from "./sign-in-form/sign-in-form.component";
import { SignUpFormComponent } from "./sign-up-form/sign-up-form.component";
import { LoginFormDirective } from "./login-form.directive";
import { LoginService } from "./login.service";

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
