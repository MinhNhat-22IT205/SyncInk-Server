import { Module } from '@nestjs/common';
import { DocumentService } from './services/document.service';
import { DocumentController } from './document.controller';
import { DocumentRepository } from './repository/document.repository';
import { PrismaModule } from '../prisma/prisma.module';
import { EditorService } from '../document-access/editor/editor.service';
import { EditorRepository } from '../document-access/editor/repository/editor.repository';
import { ViewerService } from '../document-access/viewer/viewer.service';
import { ViewerRepository } from '../document-access/viewer/repository/viewer.repository';

@Module({
  imports: [PrismaModule],
  controllers: [DocumentController],
  providers: [
    DocumentService,
    DocumentRepository,
    EditorService,
    EditorRepository,
    ViewerService,
    ViewerRepository,
  ],
})
export class DocumentModule {}
