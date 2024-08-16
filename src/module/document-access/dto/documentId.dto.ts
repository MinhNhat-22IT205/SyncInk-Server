import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class DocumentIdDto {
  @ApiProperty({
    description: 'The ID of the document',
    example: '12345',
  })
  @IsString()
  documentId: string;
}
