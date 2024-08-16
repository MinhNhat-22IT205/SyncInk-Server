// import { Injectable } from '@nestjs/common';
// import { DocumentUserRoleRepository } from './repository/document-access.repository';
// import { DocumentService } from '../document/services/document.service';
// import { DocumentRole } from '@prisma/client';
// import {
//   DocumentUserRoleEntity,
//   DocumentUserRolePopulated,
// } from '../document-access/entities/document-access.entity';

// @Injectable()
// export class DocumentUserRoleService {
//   constructor(
//     private readonly documentUserRoleRepository: DocumentUserRoleRepository,
//     private readonly documentService: DocumentService,
//   ) {}
//   async checkAccessAndCreateDocumentUserRole(
//     documentId: string,
//     endUserId: string,
//     documentRole: DocumentRole,
//     authUserId: string,
//   ): Promise<DocumentUserRoleEntity> {
//     const document = await this.documentService.getDocumentById(documentId);
//     const canEdit = await this.canEdit(authUserId, document);
//     if (!canEdit) {
//       throw new Error('You are not allowed to edit this document');
//     }
//     return this.createDocumentUserRole(documentId, endUserId, documentRole);
//   }

//   async createDocumentUserRole(
//     documentId: string,
//     endUserId: string,
//     documentRole: DocumentRole,
//   ): Promise<DocumentUserRoleEntity> {
//     const documentAccess = await this.documentUserRoleRepository.create({
//       documentId,
//       endUserId,
//       role: documentRole,
//     });
//     return documentAccess;
//   }

//   async checkAccessAndChangeDocumentUserRole(
//     documentId: string,
//     endUserId: string,
//     documentRole: DocumentRole,
//     authUserId: string,
//   ): Promise<DocumentUserRoleEntity> {
//     const document = await this.documentService.getDocumentById(documentId);
//     const canEdit = await this.canEdit(authUserId, document);
//     if (!canEdit) {
//       throw new Error('You are not allowed to edit this document');
//     }
//     return this.changeDocumentUserRole(documentId, endUserId, documentRole);
//   }

//   async changeDocumentUserRole(
//     documentId: string,
//     endUserId: string,
//     documentRole: DocumentRole,
//   ): Promise<DocumentUserRoleEntity> {
//     return this.documentUserRoleRepository.update({
//       where: { documentId, endUserId },
//       data: { role: documentRole },
//     });
//   }

//   async getViewersByDocumentId(documentId: string): Promise<DocumentUserRolePopulated[]> {
//     return this.documentUserRoleRepository.findMany({
//       where: { documentId, role: DocumentRole.VIEWER },
//       include: { endUser: true },
//     });
//   }

//   async getEditorsByDocumentId(documentId: string): Promise<DocumentUserRolePopulated[]> {
//     return this.documentUserRoleRepository.findMany({
//       where: { documentId, role: DocumentRole.EDITOR },
//       include: { endUser: true },
//     });
//   }

//   async checkAccessAndRemoveDocumentUserRole(
//     documentUserRoleId: string,
//     authUserId: string,
//   ): Promise<DocumentUserRoleEntity> {
//     const documentUserRole = await this.documentUserRoleRepository.findOne({
//       where: { id: documentUserRoleId },
//       include: { document: true },
//     });
//     if (!documentUserRole) {
//       throw new Error('Document access not found');
//     }
//     const document = documentUserRole.document;
//     const canEdit = await this.canEdit(authUserId, document);
//     if (!canEdit) {
//       throw new Error('You are not allowed to edit this document');
//     }
//     return this.removeDocumentUserRole(documentUserRoleId);
//   }

//   async removeDocumentUserRole(documentUserRoleId: string): Promise<DocumentUserRoleEntity> {
//     return this.documentUserRoleRepository.delete(documentUserRoleId);
//   }
// }
