import { IsString } from 'class-validator';

export class GetDocumentByIdDto {
  @IsString()
  documentId: string;
}
