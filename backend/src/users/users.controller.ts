import { Controller, Get, Post, Body, Query, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { UserEntity } from '../entities/user.entity';
import { UmaMailService } from '../utils/services/uma-mail/uma-mail.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly umaMailService: UmaMailService
  ) { }

  @Get()
  findAll(
    @Query('page') page: number = 0,
    @Query('rowsPerPage') limit: number = 10,
  ): Promise<Pagination<UserEntity>> {
    limit = limit > 100 ? 100 : limit;

    return this.userService.findAll({ page, limit });
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    await this.userService.create(createUserDto);
    await this.umaMailService.sendConfirmationRegistrationMail(createUserDto.email);
  }

  @Delete()
  async remove(@Query('id') id: number) {
    await this.userService.remove(id);
  }
}
