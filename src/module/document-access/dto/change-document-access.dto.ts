import { DocumentRole } from '@prisma/client';
import { IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ChangeDocumentAccessDto {
  @ApiProperty({
    description: 'The role of the document access',
    enum: DocumentRole,
    example: DocumentRole.VIEWER,
  })
  @IsEnum(DocumentRole)
  documentRole: DocumentRole;
}
