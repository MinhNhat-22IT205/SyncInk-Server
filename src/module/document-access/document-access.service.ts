import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { DocumentAccess, DocumentRole, PublicDocumentAccessType } from '@prisma/client';
import { DocumentAccessRepository } from './repository/document-access.repository';
import { DocumentAccessPopulated } from './entities/document-access.entity';
import { DocumentEntity } from '../document/entities/document.entity';
import { DocumentService } from '../document/services/document.service';
import { UserAccessToDocument } from './types/user-access-to-document.type';

@Injectable()
export class DocumentAccessService {
  constructor(
    private readonly documentAccessRepository: DocumentAccessRepository,
    @Inject(forwardRef(() => DocumentService))
    private readonly documentService: DocumentService,
  ) {}
  async checkAccessAndCreateDocumentAccess(
    documentId: string,
    endUserId: string,
    documentRole: DocumentRole,
    authUserId: string,
  ): Promise<DocumentAccess> {
    const document = await this.documentService.getDocumentById(documentId);
    const canEdit = await this.canEdit(authUserId, document);
    if (!canEdit) {
      throw new Error('You are not allowed to edit this document');
    }
    return this.createDocumentAccess(documentId, endUserId, documentRole);
  }

  async createDocumentAccess(
    documentId: string,
    endUserId: string,
    documentRole: DocumentRole,
  ): Promise<DocumentAccess> {
    const documentAccess = await this.documentAccessRepository.create({
      documentId,
      endUserId,
      role: documentRole,
    });
    return documentAccess;
  }

  async checkAccessAndChangeDocumentAccess(
    documentAccessId: string,
    documentRole: DocumentRole,
    authUserId: string,
  ): Promise<DocumentAccess> {
    const documentAccess = await this.documentAccessRepository.findById(documentAccessId);
    const document = documentAccess.document;
    const canEdit = await this.canEdit(authUserId, document);
    if (!canEdit) {
      throw new Error('You are not allowed to edit this document');
    }
    return this.changeDocumentAccess(documentAccessId, documentRole);
  }

  async changeDocumentAccess(
    documentAccessId: string,
    documentRole: DocumentRole,
  ): Promise<DocumentAccess> {
    return this.documentAccessRepository.update({
      where: { id: documentAccessId },
      data: { role: documentRole },
    });
  }

  async getViewersByDocumentId(documentId: string): Promise<DocumentAccessPopulated[]> {
    return this.documentAccessRepository.findMany({
      where: { documentId, role: DocumentRole.VIEWER },
      include: { endUser: true },
    });
  }

  async getEditorsByDocumentId(documentId: string): Promise<DocumentAccessPopulated[]> {
    return this.documentAccessRepository.findMany({
      where: { documentId, role: DocumentRole.EDITOR },
      include: { endUser: true },
    });
  }

  async checkAccessAndRemoveDocumentAccess(
    documentAccessId: string,
    authUserId: string,
  ): Promise<DocumentAccess> {
    const documentAccess = await this.documentAccessRepository.findOne({
      where: { id: documentAccessId },
      include: { document: true },
    });
    if (!documentAccess) {
      throw new Error('Document access not found');
    }
    const document = documentAccess.document;
    const canEdit = await this.canEdit(authUserId, document);
    if (!canEdit) {
      throw new Error('You are not allowed to edit this document');
    }
    return this.removeDocumentAccess(documentAccessId);
  }

  async removeDocumentAccess(documentAccessId: string): Promise<DocumentAccess> {
    return this.documentAccessRepository.delete(documentAccessId);
  }

  async getDocumentAccessesByDocumentId(documentId: string): Promise<DocumentAccessPopulated[]> {
    return this.documentAccessRepository.findMany({
      where: { documentId },
      include: { endUser: true },
    });
  }

  async canEdit(endUserId: string, document: DocumentEntity): Promise<boolean> {
    const isOwner = document.endUserId === endUserId;
    if (isOwner) {
      return true;
    }
    const documentAccess = await this.documentAccessRepository.findOne({
      where: { documentId: document.id, endUserId },
    });
    if (!documentAccess) {
      if (document.publicAccess === PublicDocumentAccessType.ALL_EDITABLE) {
        return true;
      }
      return false;
    }
    const isEditor = documentAccess.role === DocumentRole.EDITOR;
    return isEditor;
  }
  async canView(endUserId: string, document: DocumentEntity): Promise<boolean> {
    const isOwner = document.endUserId === endUserId;
    if (isOwner) {
      return true;
    }
    const documentAccess = await this.documentAccessRepository.findOne({
      where: { documentId: document.id, endUserId },
    });
    if (!documentAccess) {
      if (
        document.publicAccess === PublicDocumentAccessType.ALL_VIEWABLE ||
        document.publicAccess === PublicDocumentAccessType.ALL_EDITABLE
      ) {
        return true;
      }
      return false;
    }
    const isViewerOrEditor =
      documentAccess.role === DocumentRole.VIEWER || documentAccess.role === DocumentRole.EDITOR;
    return isViewerOrEditor;
  }

  async getCanViewAndCanEdit(endUserId: string, documentId: string): Promise<UserAccessToDocument> {
    const document = await this.documentService.getDocumentById(documentId);
    const canView = await this.canView(endUserId, document);
    const canEdit = await this.canEdit(endUserId, document);
    return { canView, canEdit };
  }
}
