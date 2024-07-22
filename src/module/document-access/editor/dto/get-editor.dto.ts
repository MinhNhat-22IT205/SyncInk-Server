import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class GetEditorByIdDto {
  @ApiProperty()
  @IsString()
  editorId: string;
}
