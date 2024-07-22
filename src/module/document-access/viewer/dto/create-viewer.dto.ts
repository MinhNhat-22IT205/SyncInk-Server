import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddViewerDto {
  @IsString()
  @ApiProperty()
  endUserId: string;

  @IsString()
  @ApiProperty()
  documentId: string;
}
