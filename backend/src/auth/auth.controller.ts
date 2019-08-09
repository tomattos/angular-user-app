import { Body, Controller, Post } from '@nestjs/common';
import { LoginCredentialsDto } from './dtos/login-credentials.dto';
import { RegisterCredentialsDto } from './dtos/register-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ) {
  }

  @Post('login')
  async login(@Body() payload: LoginCredentialsDto) {
    const valid = await this.authService.validateUser(payload);
    return valid;
  }

  @Post('register')
  async register(@Body() payload: RegisterCredentialsDto) {
    await this.authService.registerUser(payload);
  }
}
