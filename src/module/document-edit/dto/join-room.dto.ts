import { IsNotEmpty, IsString } from 'class-validator';

export class JoinRoomDto {
  @IsNotEmpty()
  @IsString()
  documentId: string;

  @IsNotEmpty()
  @IsString()
  endUserId: string;
}
