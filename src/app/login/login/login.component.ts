import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import { SignInFormComponent } from "src/app/login/sign-in-form/sign-in-form.component";
import { LoginFormDirective } from "src/app/login/login-form.directive";
import { LoginService } from "src/app/login/login.service";

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

    this.loginService.getFormName().subscribe(component => {
      this.loadFormComponent(component);
    });
  }

  loadFormComponent(componentName) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      componentName
    );

    this.clearContainer();
    this.createComponent(componentFactory);
  }

  createComponent(factory) {
    this.viewContainerRef.createComponent(factory);
  }

  clearContainer() {
    this.viewContainerRef.clear();
  }
}
