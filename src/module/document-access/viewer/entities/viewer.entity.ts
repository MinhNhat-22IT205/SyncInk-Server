import { ApiProperty } from '@nestjs/swagger';
import { Viewer } from '@prisma/client';
import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';
import { DocumentEntity } from 'src/module/document/entities/document.entity';
import { EndUserEntity } from 'src/module/users/enduser/entities/enduser.entity';

export class ViewerEntity implements Viewer {
  @ApiProperty()
  @IsString()
  @Expose()
  id: string;
  @ApiProperty()
  @IsString()
  @Expose()
  endUserId: string;
  @ApiProperty()
  @IsString()
  @Expose()
  documentId: string;
}
export class ViewerEntityPopulated extends ViewerEntity {
  @ApiProperty()
  @IsString()
  @Expose()
  document: DocumentEntity;
  @ApiProperty()
  @IsString()
  @Expose()
  endUser: EndUserEntity;
}
