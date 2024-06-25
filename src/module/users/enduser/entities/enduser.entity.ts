import { ApiProperty } from '@nestjs/swagger';
import { $Enums, EndUser } from '@prisma/client';
import { Exclude, Expose } from 'class-transformer';

export class EndUserEntity implements EndUser {
  @ApiProperty()
  @Expose()
  id: string;

  @ApiProperty()
  @Expose()
  createdAt: Date;

  @ApiProperty()
  @Expose()
  updatedAt: Date;

  @ApiProperty()
  @Expose()
  username: string;

  @ApiProperty()
  @Expose()
  email: string;

  @ApiProperty()
  @Exclude()
  password: string;

  @ApiProperty()
  @Expose()
  avatar: string;

  @ApiProperty()
  @Expose()
  gender: $Enums.Gender;

  @ApiProperty()
  @Expose()
  description: string;

  @ApiProperty()
  @Exclude()
  activationToken: string;
}
