import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { EndUserService } from 'src/module/users/enduser/enduser.service';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private authService: AuthService) {
    //decode the token and pass down to validate()
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: { userId: string }) {
    const user = await this.authService.getEndUserMinimalById(payload.userId);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
