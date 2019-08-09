import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt/bcrypt';
import { LoginCredentialsDto } from './dtos/login-credentials.dto';
import { UsersService } from '../users/users.service';
import { RegisterCredentialsDto } from './dtos/register-credentials.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(payload: LoginCredentialsDto): Promise<boolean> {
    const user = await this.usersService.findByEmail(payload.email);
    return bcrypt.compare(payload.password, user.password);
  }

  async registerUser(payload: RegisterCredentialsDto) {
    payload.password = await bcrypt.hash(payload.password, 10);
    await this.usersService.create(payload);
  }
}
