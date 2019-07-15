import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { User } from './user.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) { }

  findAll(): Promise<UserEntity[]> {
    return this.userRepository.createQueryBuilder()
      .select(['user.email', 'user.firstName', 'user.lastName'])
      .from(UserEntity, 'user')
      .getMany();
  }

  create(user: User) {
    this.userRepository.insert(user);
  }
}
