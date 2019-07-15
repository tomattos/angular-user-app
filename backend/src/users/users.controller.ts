import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.interface';
import { CreateUserDto } from './dtos/create-user.dto';
import * as crypto from 'crypto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
  ) { }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const { password, ...data } = createUserDto;
    const hashPassword = crypto.createHmac('sha256', password).digest('hex');

    this.userService.create({ ...data, hashPassword });
  }
}
