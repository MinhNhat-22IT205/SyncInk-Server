import { ApiProperty } from '@nestjs/swagger';
import { EditorEntity } from '../entities/editor.entity';
import { IsString } from 'class-validator';

export class AddEditorDto {
  @ApiProperty()
  @IsString()
  endUserId: string;

  @ApiProperty()
  @IsString()
  documentId: string;
}
