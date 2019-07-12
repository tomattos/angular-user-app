import { Component, OnInit } from "@angular/core";
import { User } from "src/app/view/users/user";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  users: User[] = [
    {
      id: 1
    }
  ];

  columns: string[] = ["id"];

  constructor() {}

  ngOnInit() {}
}
