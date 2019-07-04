import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-sign-in-form",
  templateUrl: "./sign-in-form.component.html",
  styleUrls: ["./sign-in-form.component.scss"]
})
export class SignInFormComponent implements OnInit {
  formControlEmail = new FormControl("");
  formControlPassword = new FormControl("");

  constructor() {}

  ngOnInit() {}
}
