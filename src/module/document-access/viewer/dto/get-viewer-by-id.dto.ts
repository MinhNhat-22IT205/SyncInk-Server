import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class GetViewerByIdDto {
  @IsString()
  @ApiProperty()
  viewerId: string;
}
