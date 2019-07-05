import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[login-form-host]"
})
export class LoginFormDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
