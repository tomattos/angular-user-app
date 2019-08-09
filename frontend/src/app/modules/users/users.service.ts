import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PageableResponse, PageableInterface } from '../../common/pagination/pagination';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    private http: HttpClient
  ) { }

  fetchUsers(queryParams: PageableInterface = { page: 0, rowsPerPage: 10 }) {
    const params = new HttpParams({
      fromObject: {
        page: queryParams.page.toString(),
        rowsPerPage: queryParams.rowsPerPage.toString()
      }
    });

    const options = {
      params
    };

    return this.http.get<PageableResponse<User>>(`/api/users`, options);
  }

  createUser(user: User) {
    return this.http.post<User>('/api/users', user, { observe: 'response' });
  }

  removeUser(userId: number) {
    const params = new HttpParams().set('id', userId.toString());
    const options = { params };

    return this.http.delete('/api/users', options);
  }
}
