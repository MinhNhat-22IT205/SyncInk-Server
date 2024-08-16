import { forwardRef, Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { DocumentAccessController } from './document-access.controller';
import { DocumentAccessService } from './document-access.service';
import { DocumentService } from '../document/services/document.service';
import { DocumentRepository } from '../document/repository/document.repository';
import { DocumentModule } from '../document/document.module';
import { DocumentAccessRepository } from './repository/document-access.repository';
@Module({
  imports: [PrismaModule, forwardRef(() => DocumentModule)],
  controllers: [DocumentAccessController],
  providers: [DocumentAccessService, DocumentAccessRepository, DocumentService, DocumentRepository],
})
export class DocumentAccessModule {}
