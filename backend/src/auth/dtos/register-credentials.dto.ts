import { IsEmail, MaxLength, MinLength } from 'class-validator';

export class RegisterCredentialsDto {
  @IsEmail()
  email: string;

  @MinLength(2)
  @MaxLength(32)
  firstName: string;

  @MinLength(2)
  @MaxLength(32)
  lastName: string;

  @MinLength(6)
  @MaxLength(18)
  password: string;
}
