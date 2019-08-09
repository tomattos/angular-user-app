import { IsEmail, MaxLength, MinLength } from 'class-validator';

export class LoginCredentialsDto {
  @IsEmail()
  email: string;

  @MinLength(6)
  @MaxLength(32)
  password: string;
}
