import { ApiProperty } from '@nestjs/swagger';

export class EditDocumentContentDto {
  @ApiProperty({
    description: 'The ID of the document',
  })
  documentId: string;

  @ApiProperty({
    description: 'The ID of the end user',
  })
  endUserId: string;

  @ApiProperty({
    example: 'Lorem ipsum dolor sit amet',
    description: 'The content of the document',
  })
  content: string;
}
