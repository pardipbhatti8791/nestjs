import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ description: 'Valid email' })
  @IsString()
  @IsEmail()
  readonly email: string;

  @ApiProperty({ description: 'password field is required' })
  @IsString()
  readonly password: string;
}
