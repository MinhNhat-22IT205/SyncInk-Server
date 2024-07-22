import { ApiProperty } from '@nestjs/swagger';
import { $Enums, Document } from '@prisma/client';
import { Expose } from 'class-transformer';
export class DocumentEntity implements Document {
  @ApiProperty()
  @Expose()
  id: string;

  @ApiProperty()
  @Expose()
  title: string;

  @ApiProperty()
  @Expose()
  description: string;

  @ApiProperty()
  @Expose()
  content: string;

  @ApiProperty()
  @Expose()
  image: string;

  @ApiProperty()
  @Expose()
  endUserId: string;

  @ApiProperty()
  @Expose()
  publicAccess: $Enums.AccessType;

  @ApiProperty()
  @Expose()
  createdAt: Date;

  @ApiProperty()
  @Expose()
  updatedAt: Date;
}
