import { PartialType } from '@nestjs/swagger';
import { AddEditorDto } from './create-editor.dto';

export class UpdateEditorDto extends PartialType(AddEditorDto) {}
