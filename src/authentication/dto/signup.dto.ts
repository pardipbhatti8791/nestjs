import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class SignupDto {
  @ApiProperty({ description: 'first name field is required' })
  @IsString()
  readonly firstName: string;

  @ApiProperty({ description: 'last name field is required' })
  @IsString()
  readonly lastName: string;

  @ApiProperty({ description: 'Valid email' })
  @IsString()
  @IsEmail()
  readonly email: string;

  @ApiProperty({ description: 'password field is required' })
  @IsString()
  readonly password: string;

}