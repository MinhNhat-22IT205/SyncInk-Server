//src/auth/auth.controller.ts

import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthEntity } from './entity/auth.entity';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { EndUserEntity } from '../users/enduser/entities/enduser.entity';
import { UseSerializeInterceptor } from 'src/core/interceptor/serialize.interceptor';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseSerializeInterceptor(AuthEntity)
  @Post('login')
  @ApiOkResponse({ type: AuthEntity })
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @UseSerializeInterceptor(EndUserEntity)
  @Post('register')
  @ApiCreatedResponse({ type: EndUserEntity })
  async signup(@Body() registerDto: RegisterDto) {
    const enduser = await this.authService.register(registerDto);
    return enduser;
  }
}
