import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt/bcrypt';
import { LoginCredentialsDto } from './dtos/login-credentials.dto';
import { UsersService } from '../users/users.service';
import { RegisterCredentialsDto } from './dtos/register-credentials.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(payload: LoginCredentialsDto): Promise<object | boolean> {
    const user = await this.usersService.findByEmail(payload.email);
    const valid = bcrypt.compare(payload.password, user.password);

    return valid ? { username: user.email, sub: user.id } : false;
  }

  async registerUser(payload: RegisterCredentialsDto) {
    payload.password = await bcrypt.hash(payload.password, 10);
    await this.usersService.create(payload);
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user.userId };

    return {
      access_token: this.jwtService.sign(payload)
    };
  }
}
