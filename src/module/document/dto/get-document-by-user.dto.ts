import { IsString } from 'class-validator';

export class GetDocumentByUserIdDto {
  @IsString()
  endUserId: string;
}
