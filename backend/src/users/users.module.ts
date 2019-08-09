import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { VerificationTokenEntity } from '../entities/verification-token.entity';
import { UmaMailService } from '../utils/services/uma-mail/uma-mail.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, VerificationTokenEntity])],
  controllers: [UsersController],
  providers: [UsersService, UmaMailService],
})
export class UsersModule { }
