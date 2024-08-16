import { IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { DocumentRole } from '@prisma/client';

export class CreateDocumentAccessDto {
  @ApiProperty({
    description: 'The ID of the document',
    example: '12345',
  })
  @IsString()
  documentId: string;

  @ApiProperty({
    description: 'The ID of the end user',
    example: '67890',
  })
  @IsString()
  endUserId: string;

  @ApiProperty({
    description: 'The role of the document access',
    enum: DocumentRole,
    example: DocumentRole.VIEWER,
  })
  @IsEnum(DocumentRole)
  documentRole: DocumentRole;
}
