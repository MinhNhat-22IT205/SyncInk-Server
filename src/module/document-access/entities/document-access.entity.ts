import { ApiProperty } from '@nestjs/swagger';
import { $Enums, DocumentAccess } from '@prisma/client';
import { Expose, Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { DocumentEntity } from 'src/module/document/entities/document.entity';
import { EndUserEntity } from 'src/module/users/enduser/entities/enduser.entity';

export class DocumentAccessEntity implements DocumentAccess {
  @ApiProperty()
  @Expose()
  id: string;

  @ApiProperty()
  @Expose()
  endUserId: string;

  @ApiProperty()
  @Expose()
  documentId: string;

  @ApiProperty()
  @Expose()
  role: $Enums.DocumentRole;
}
export class DocumentAccessPopulated extends DocumentAccessEntity {
  @ApiProperty()
  @Type(() => EndUserEntity)
  @ValidateNested()
  @Expose()
  endUser: EndUserEntity;

  @ApiProperty()
  @Type(() => DocumentEntity)
  @ValidateNested()
  @Expose()
  document?: DocumentEntity;
}
