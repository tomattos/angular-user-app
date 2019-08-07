import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/view/users/user';
import { UsersService } from './users.service';
import { List } from 'immutable';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: List<User>;

  columns: string[] = ['id', 'firstName', 'lastName', 'email'];

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }
}
