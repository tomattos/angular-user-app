import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { UsersService } from '../users/users.service';
import { UmaMailService } from '../utils/services/uma-mail/uma-mail.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    PassportModule.register(({
      defaultStrategy: 'jwt'
    })),
    JwtModule.register({
      secret: 'secret',
      signOptions: {
        expiresIn: '60s'
      }
    })
  ],
  providers: [AuthService, JwtStrategy, UsersService, UmaMailService],
  controllers: [AuthController]
})
export class AuthModule {}
