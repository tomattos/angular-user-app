import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { List } from 'immutable';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: any;

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get('/api/users').pipe(
      map(data => {
        this.users = List(data);
        return this.users;
      })
    );
  }
}
