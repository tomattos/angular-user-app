import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
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
    const loginPayload = await this.authService.validateUser(payload);
    if (loginPayload) {
      return await this.authService.login(loginPayload);
    } else {
      return new HttpException({
        status: HttpStatus.UNAUTHORIZED,
        error: 'Access denied'
      }, 401);
    }
  }

  @Post('register')
  async register(@Body() payload: RegisterCredentialsDto) {
    await this.authService.registerUser(payload);
  }
}
