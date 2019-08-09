import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog, PageEvent } from '@angular/material';
import { Map } from 'immutable';
import { User } from 'src/app/modules/users/user';
import { UsersService } from './users.service';
import { PageableInterface, PageableResponse } from '../../common/pagination/pagination';
import { pageSizeOptions } from '../../constants/pagination';
import { CreateUserModalComponent } from './modals/create-user-modal/create-user-modal.component';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: Map<string, any>;
  columns: string[] = ['id', 'name', 'email', 'menu'];
  pageEvent: PageEvent;

  constructor(
    public dialog: MatDialog,
    private usersService: UsersService
  ) { }

  async ngOnInit() {
    this.loadUsers();
  }

  loadUsers(event?: PageEvent) {
    const queryParams: PageableInterface = {
      page: event ? event.pageIndex + 1 : 1,
      rowsPerPage: event ? event.pageSize : 10
    };

    this.usersService.fetchUsers(queryParams).subscribe((res: PageableResponse<User>) => {
      this.users = Map({...res});
    });

    return event;
  }

  openCreateUserModal() {
    const dialogRef = this.dialog.open(CreateUserModalComponent, {
      width: '500px'
    });

    dialogRef.beforeClose().pipe(
      take(1)
    ).subscribe(statusCode => {
      // if user create successfully update users table
      if (statusCode === 201) {
        this.loadUsers();
      }
    });
  }

  removeUser(userId: number) {
    this.usersService.removeUser(userId).subscribe(() => {
      this.loadUsers();
    });
  }

  get totalItems() {
    return this.users.has('totalItems') ? this.users.get('totalItems') : 0;
  }

  get pageSize() {
    return 10;
  }

  get pageSizeOptions() {
    return pageSizeOptions;
  }
}
