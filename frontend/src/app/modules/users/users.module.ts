import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from 'src/app/modules/users/users-routing.module';
import { MaterialModule } from 'src/app/libs/material/material.module';
import { UsersService } from './users.service';
import { CreateUserModalComponent } from './modals/create-user-modal/create-user-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  providers: [UsersService],
  declarations: [UsersComponent, CreateUserModalComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [CreateUserModalComponent]
})
export class UsersModule { }
