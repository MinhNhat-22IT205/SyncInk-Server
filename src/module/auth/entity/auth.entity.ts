//src/auth/entity/auth.entity.ts
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { EndUserEntity } from 'src/module/users/enduser/entities/enduser.entity';

export class AuthEntity {
  @ApiProperty()
  @Expose()
  endUser: EndUserEntity;

  @ApiProperty()
  @Expose()
  accessToken: string;
}
