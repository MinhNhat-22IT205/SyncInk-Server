import { Module } from '@nestjs/common';
import { DocumentService } from '../document/services/document.service';
import { DocumentEditGateway } from './document-edit.gateway';
import { DocumentModule } from '../document/document.module';

@Module({
  providers: [DocumentEditGateway, DocumentService],
  imports: [DocumentModule],
})
export class ChatModule {}
