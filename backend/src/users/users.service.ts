import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { User } from './user.interface';
import { paginate, IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) { }

  async findAll(options: IPaginationOptions): Promise<Pagination<UserEntity>> {
    const { limit, page } = options;
    const offset = limit * page;

    const queryBuilder = await this.userRepository.createQueryBuilder('user')
      .select(['user.id', 'user.firstName', 'user.lastName', 'user.email'])
      .orderBy({
        ['user.id']: 'ASC',
      });

    return await paginate<UserEntity>(queryBuilder, options);
  }

  async findByEmail(email: string): Promise<UserEntity> {
     return await this.userRepository.findOne({
        where: { email },
      });
  }

  async create(user: User) {
    try {
      await this.userRepository.insert(user);
    } catch {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'This email has already exist'
      }, 400);
    }
  };

  async remove(userId: number) {
    await this.userRepository.createQueryBuilder()
      .delete()
      .where('id = :userId', { userId })
      .execute();
  }
}
