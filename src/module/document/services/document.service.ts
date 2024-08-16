import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateDocumentDto } from '../dto/create-document.dto';
import { UpdateDocumentDto } from '../dto/update-document.dto';
import { DocumentRepository } from '../repository/document.repository';
import { DocumentEntity } from '../entities/document.entity';
import { DocumentAccessService } from 'src/module/document-access/document-access.service';

@Injectable()
export class DocumentService {
  constructor(
    private readonly documentRepository: DocumentRepository,
    @Inject(forwardRef(() => DocumentAccessService))
    private readonly documentAccessService: DocumentAccessService,
  ) {}

  async createDocument(
    createDocumentDto: CreateDocumentDto,
    endUserId: string,
  ): Promise<DocumentEntity> {
    return this.documentRepository.create({ ...createDocumentDto, endUserId });
  }

  async getDocumentsByUserId(endUserId: string): Promise<DocumentEntity[]> {
    return this.documentRepository.findMany({ where: { endUserId: endUserId } });
  }

  async checkAccessAndGetDocumentById(
    documentId: string,
    endUserId: string,
  ): Promise<DocumentEntity> {
    const document = await this.documentRepository.findOne({ where: { id: documentId } });
    if (!document) {
      throw new NotFoundException('Document not found');
    }
    const canView = await this.documentAccessService.canView(endUserId, document);
    if (!canView) {
      throw new UnauthorizedException('You are not allowed for viewing this document');
    }
    return document;
  }

  async getDocumentById(documentId: string): Promise<DocumentEntity> {
    return this.documentRepository.findOne({ where: { id: documentId } });
  }

  async checkAccessAndUpdateDocument(
    updateDocumentDto: UpdateDocumentDto,
    documentId: string,
    endUserId: string,
  ): Promise<DocumentEntity> {
    const document = await this.documentRepository.findOne({ where: { id: documentId } });
    const canEdit = await this.documentAccessService.canEdit(endUserId, document);
    if (!canEdit) {
      throw new UnauthorizedException('You are not allowed for editing this document');
    }
    return this.documentRepository.update({
      data: {
        ...updateDocumentDto,
      },
      where: { id: documentId },
    });
  }

  async checkAccessAndDeleteDocument(
    documentId: string,
    endUserId: string,
  ): Promise<DocumentEntity> {
    const document = await this.documentRepository.findOne({ where: { id: documentId } });
    if (!document) {
      throw new NotFoundException('Document not found');
    }
    const isOwner = document.endUserId === endUserId;
    if (!isOwner) {
      throw new UnauthorizedException('Only the owner is allowed for deleting this document');
    }
    return this.documentRepository.delete(documentId);
  }
}
