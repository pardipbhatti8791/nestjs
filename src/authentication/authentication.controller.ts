import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';

@ApiTags('Authentication')
@Controller('authentication')
export class AuthenticationController {

  @Post()
  login(@Body() loginDto: LoginDto) {
    return {}
  }
}
