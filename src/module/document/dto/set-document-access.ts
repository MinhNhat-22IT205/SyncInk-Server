import { IsString, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { $Enums } from '@prisma/client';

export class SetDocumentAccessTypeDto {
  @ApiProperty({ example: 'PUBLIC' })
  @IsEnum($Enums.AccessType)
  documentAccessType: $Enums.AccessType;
}
