import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from 'src/app/view/users/users-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { UsersService } from './users.service';

@NgModule({
  providers: [UsersService],
  declarations: [UsersComponent],
  imports: [CommonModule, UsersRoutingModule, MaterialModule]
})
export class UsersModule { }
