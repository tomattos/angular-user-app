import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { UsersService } from '../users/users.service';
import { UmaMailService } from '../utils/services/uma-mail/uma-mail.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [AuthService, UsersService, UmaMailService],
  controllers: [AuthController]
})
export class AuthModule {}
