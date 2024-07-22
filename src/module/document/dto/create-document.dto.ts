import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDocumentDto {
  @ApiProperty({ example: 'My Document Title' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'This is a document description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  image?: string;
}
