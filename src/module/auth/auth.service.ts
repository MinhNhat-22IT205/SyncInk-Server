import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from './entity/auth.entity';
import { AuthRepository } from './repository/auth.repository';
import { RegisterDto } from './dto/register.dto';
import { convertToHashedPassword, isMatchedPassword } from 'src/shared/utils/bcript-helper';
import { EndUserEntity } from '../users/enduser/entities/enduser.entity';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private authRepository: AuthRepository,
    private jwtService: JwtService,
  ) {}

  async login({ email, password }: LoginDto): Promise<AuthEntity> {
    const user = await this.authRepository.findEndUserMinimal(email);

    if (!user) {
      throw new NotFoundException(`No user found for email: ${email}`);
    }

    const isPasswordValid = isMatchedPassword(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }
    return {
      endUser: user,
      accessToken: this.jwtService.sign({ userId: user.id }),
    };
  }

  async register(registerEndUserDto: RegisterDto): Promise<EndUserEntity> {
    const hashedPassword = await convertToHashedPassword(registerEndUserDto.password);

    const user = await this.authRepository.create({
      ...registerEndUserDto,
      password: hashedPassword,
    });

    return user;
  }
}
