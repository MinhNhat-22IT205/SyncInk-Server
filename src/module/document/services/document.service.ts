import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateDocumentDto } from '../dto/create-document.dto';
import { UpdateDocumentDto } from '../dto/update-document.dto';
import { DocumentRepository } from '../repository/document.repository';
import { DocumentEntity } from '../entities/document.entity';
import { DOCUMENT_ACCESS_TYPE } from 'src/shared/constants/document-access-type.constant';
import { EditorService } from 'src/module/document-access/editor/editor.service';
import { SetDocumentAccessTypeDto } from '../dto/set-document-access';
import { ViewerService } from 'src/module/document-access/viewer/viewer.service';

//viewable -> all users not editable
//editable -> check if user is in the list of editors

@Injectable()
export class DocumentService {
  constructor(
    private readonly documentRepository: DocumentRepository,
    private readonly editorService: EditorService,
    private readonly viewerService: ViewerService,
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

  async getDocumentById(documentId: string, endUserId: string): Promise<DocumentEntity> {
    const document = await this.documentRepository.findOne({ where: { id: documentId } });
    if (!document) {
      throw new NotFoundException('Document not found');
    }
    const isOwner = document.endUserId === endUserId;
    if (isOwner) {
      return document;
    }
    if (document.publicAccess === DOCUMENT_ACCESS_TYPE.RESTRICTED) {
      const isViewer = await this.isDocumentViewer(endUserId, documentId);
      if (!isViewer) {
        throw new UnauthorizedException('You are not allowed for viewing this document');
      }
    }

    return document;
  }

  async updateDocument(
    updateDocumentDto: UpdateDocumentDto,
    documentId: string,
    endUserId: string,
  ): Promise<DocumentEntity> {
    const requestedDocument = await this.documentRepository.findOne({ where: { id: documentId } });
    const isCreator = requestedDocument.endUserId === endUserId;

    if (!isCreator) {
      if (
        requestedDocument.publicAccess !== DOCUMENT_ACCESS_TYPE.EDITABLE &&
        requestedDocument.publicAccess !== DOCUMENT_ACCESS_TYPE.RESTRICTED
      ) {
        throw new UnauthorizedException('You are not allowed for editing this document');
      }
      const isEditor = await this.isDocumentEditor(endUserId, documentId);
      if (!isEditor) {
        throw new UnauthorizedException('You are not allowed for editing this document');
      }
    }
    return this.documentRepository.update({
      data: {
        content: updateDocumentDto.content + requestedDocument.content,
        ...updateDocumentDto,
      },
      where: { id: documentId },
    });
  }

  async deleteDocument(documentId: string, endUserId: string): Promise<DocumentEntity> {
    const isDocumentBelongsToUser = await this.isDocumentBelongsToUser(documentId, endUserId);
    if (!isDocumentBelongsToUser) {
      throw new UnauthorizedException('You are not allowed for editing this document');
    }
    return this.documentRepository.delete(documentId);
  }

  async setDocumentAccessType(
    updateDocumentAccessTypeDto: SetDocumentAccessTypeDto,
    documentId: string,
    endUserId: string,
  ): Promise<DocumentEntity> {
    const isDocumentBelongsToUser = await this.isDocumentBelongsToUser(documentId, endUserId);
    if (!isDocumentBelongsToUser) {
      throw new UnauthorizedException('You are not allowed for editing this document');
    }
    return this.documentRepository.update({
      data: { publicAccess: updateDocumentAccessTypeDto.documentAccessType },
      where: { id: documentId },
    });
  }

  async isDocumentBelongsToUser(documentId: string, endUserId: string): Promise<boolean> {
    const document = await this.documentRepository.findOne({ where: { id: documentId } });
    return document.endUserId === endUserId;
  }
  async isDocumentEditor(endUserId: string, documentId: string): Promise<boolean> {
    const editors = await this.editorService.getEditorsFromDocumentId({ documentId });
    const isEditor = editors.some(editor => editor.endUserId === endUserId);
    return isEditor;
  }
  async isDocumentViewer(endUserId: string, documentId: string): Promise<boolean> {
    const viewers = await this.viewerService.getViewersFromDocumentId({ documentId });
    const isViewer = viewers.some(viewer => viewer.endUserId === endUserId);
    return isViewer;
  }
}
