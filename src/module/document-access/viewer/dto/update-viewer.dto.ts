import { PartialType } from '@nestjs/swagger';
import { AddViewerDto } from './create-viewer.dto';

export class UpdateViewerDto extends PartialType(AddViewerDto) {}
