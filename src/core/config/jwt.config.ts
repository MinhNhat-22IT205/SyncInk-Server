import { JwtModuleOptions } from '@nestjs/jwt';

export const JWT_CONFIG_OPTIONS: JwtModuleOptions = {
  secret: process.env.JWT_SECRET,
  signOptions: { expiresIn: '5m' }, // e.g. 30s, 7d, 24h
};
