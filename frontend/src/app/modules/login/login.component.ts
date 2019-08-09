import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  ComponentFactory
} from "@angular/core";

import { SignInFormComponent } from "src/app/modules/login/sign-form/sign-in-form/sign-in-form.component";
import { SignUpFormComponent } from "./sign-form/sign-up-form/sign-up-form.component";
import { LoginFormDirective } from "./directive/login-form.directive";
import { LoginService } from "./login.service";
import { LoginFormInterface } from "./login.interface";
import { Type } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  @ViewChild(LoginFormDirective, { static: true })
  loginFormHost: LoginFormDirective;

  viewContainerRef: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.viewContainerRef = this.loginFormHost.viewContainerRef;
    this.loadFormComponent(SignInFormComponent);

    this.loginService.getFormName().subscribe(type => {
      const component: Type<LoginFormInterface> =
        type === "sign-in" ? SignInFormComponent : SignUpFormComponent;

      this.loadFormComponent(component);
    });
  }

  loadFormComponent(component: Type<LoginFormInterface>) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      component
    );

    this.clearContainer();
    this.createComponent(factory);
  }

  createComponent(factory: ComponentFactory<LoginFormInterface>) {
    this.viewContainerRef.createComponent(factory);
  }

  clearContainer() {
    this.viewContainerRef.clear();
  }
}
