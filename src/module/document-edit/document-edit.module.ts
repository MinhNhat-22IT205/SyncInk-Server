import { Module } from '@nestjs/common';
import { DocumentService } from '../document/services/document.service';
import { DocumentEditGateway } from './document-edit.gateway';
import { DocumentModule } from '../document/document.module';
import { DocumentRepository } from '../document/repository/document.repository';
import { PrismaModule } from '../prisma/prisma.module';
import { DocumentAccessModule } from '../document-access/document-access.module';
import { DocumentAccessRepository } from '../document-access/repository/document-access.repository';
import { DocumentAccessService } from '../document-access/document-access.service';

@Module({
  imports: [DocumentModule, PrismaModule, DocumentAccessModule],
  providers: [
    DocumentEditGateway,
    DocumentService,
    DocumentRepository,
    DocumentAccessRepository,
    DocumentAccessService,
  ],
})
export class DocumentEditModule {}
