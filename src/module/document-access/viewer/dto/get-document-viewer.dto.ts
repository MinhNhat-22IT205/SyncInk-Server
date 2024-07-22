import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class getDocumentViewersDto {
  @IsString()
  @ApiProperty()
  documentId: string;
}
