import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthRepository } from './repository/auth.repository';
import { JWT_CONFIG_OPTIONS } from 'src/core/config/jwt.config';
import { EndUserModule } from '../users/enduser/enduser.module';
import { JwtStrategy } from './strategy/jwt.strategy';
import { EndUserService } from '../users/enduser/enduser.service';
import { EndUserRepository } from '../users/enduser/repository/enduser.repository';

@Module({
  imports: [PrismaModule, PassportModule, EndUserModule, JwtModule.register(JWT_CONFIG_OPTIONS)],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository, EndUserService, EndUserRepository, JwtStrategy],
})
export class AuthModule {}
