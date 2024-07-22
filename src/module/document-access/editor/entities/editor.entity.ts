import { ApiProperty } from '@nestjs/swagger';
import { Editor, EndUser } from '@prisma/client';
import { Exclude, Expose, Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { DocumentEntity } from 'src/module/document/entities/document.entity';
import { EndUserEntity } from 'src/module/users/enduser/entities/enduser.entity';

export class EditorEntity implements Editor {
  @ApiProperty()
  @Expose()
  id: string;

  @ApiProperty()
  @Expose()
  endUserId: string;

  @ApiProperty()
  @Expose()
  documentId: string;
}
export class EditorEntityPopulated extends EditorEntity {
  @ApiProperty()
  @Type(() => EndUserEntity)
  @ValidateNested()
  @Expose()
  endUser: EndUserEntity;

  @ApiProperty()
  @Type(() => DocumentEntity)
  @ValidateNested()
  @Expose()
  document: DocumentEntity;
}
