import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDocumentDto } from './create-document.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateDocumentDto extends PartialType(CreateDocumentDto) {
  @ApiProperty({ example: 'This is a document content' })
  @IsString()
  @IsOptional()
  content?: string;
}
