import { forwardRef, Module } from '@nestjs/common';
import { DocumentService } from './services/document.service';
import { DocumentController } from './document.controller';
import { DocumentRepository } from './repository/document.repository';
import { PrismaModule } from '../prisma/prisma.module';
import { DocumentAccessService } from '../document-access/document-access.service';
import { DocumentAccessRepository } from '../document-access/repository/document-access.repository';
import { DocumentAccessModule } from '../document-access/document-access.module';

@Module({
  imports: [PrismaModule, forwardRef(() => DocumentAccessModule)],
  controllers: [DocumentController],
  providers: [DocumentService, DocumentRepository, DocumentAccessService, DocumentAccessRepository],
})
export class DocumentModule {}
