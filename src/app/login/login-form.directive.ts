import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appLoginForm]"
})
export class LoginFormDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
