import { IsEmail, MinLength, MaxLength, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  readonly email: string;

  @IsString()
  @MinLength(2)
  @MaxLength(32)
  readonly firstName: string;

  @IsString()
  @MinLength(2)
  @MaxLength(32)
  readonly lastName: string;
}
