import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';
import { AuthenticationService } from './authentication.service';
import { LocalAuthGuard } from './guards/local-auth.gurad';

@ApiTags('Authentication')
@Controller('auth')
export class AuthenticationController {

  constructor(private readonly authService: AuthenticationService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return {}
  }

  @UseGuards(LocalAuthGuard)
  @Post('signup')
  signup(@Body() signupDto: SignupDto) {
    console.log(signupDto)
    return {}
  }
}
