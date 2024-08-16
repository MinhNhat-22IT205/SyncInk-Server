"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentService = void 0;
const common_1 = require("@nestjs/common");
const document_repository_1 = require("../repository/document.repository");
const document_access_service_1 = require("../../document-access/document-access.service");
let DocumentService = class DocumentService {
    constructor(documentRepository, documentAccessService) {
        this.documentRepository = documentRepository;
        this.documentAccessService = documentAccessService;
    }
    async createDocument(createDocumentDto, endUserId) {
        return this.documentRepository.create({ ...createDocumentDto, endUserId });
    }
    async getDocumentsByUserId(endUserId) {
        return this.documentRepository.findMany({ where: { endUserId: endUserId } });
    }
    async checkAccessAndGetDocumentById(documentId, endUserId) {
        const document = await this.documentRepository.findOne({ where: { id: documentId } });
        if (!document) {
            throw new common_1.NotFoundException('Document not found');
        }
        const canView = await this.documentAccessService.canView(endUserId, document);
        if (!canView) {
            throw new common_1.UnauthorizedException('You are not allowed for viewing this document');
        }
        return document;
    }
    async getDocumentById(documentId) {
        return this.documentRepository.findOne({ where: { id: documentId } });
    }
    async checkAccessAndUpdateDocument(updateDocumentDto, documentId, endUserId) {
        const document = await this.documentRepository.findOne({ where: { id: documentId } });
        const canEdit = await this.documentAccessService.canEdit(endUserId, document);
        if (!canEdit) {
            throw new common_1.UnauthorizedException('You are not allowed for editing this document');
        }
        return this.documentRepository.update({
            data: {
                ...updateDocumentDto,
            },
            where: { id: documentId },
        });
    }
    async checkAccessAndDeleteDocument(documentId, endUserId) {
        const document = await this.documentRepository.findOne({ where: { id: documentId } });
        if (!document) {
            throw new common_1.NotFoundException('Document not found');
        }
        const isOwner = document.endUserId === endUserId;
        if (!isOwner) {
            throw new common_1.UnauthorizedException('Only the owner is allowed for deleting this document');
        }
        return this.documentRepository.delete(documentId);
    }
};
exports.DocumentService = DocumentService;
exports.DocumentService = DocumentService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => document_access_service_1.DocumentAccessService))),
    __metadata("design:paramtypes", [document_repository_1.DocumentRepository,
        document_access_service_1.DocumentAccessService])
], DocumentService);
//# sourceMappingURL=document.service.js.map