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
exports.DocumentController = void 0;
const common_1 = require("@nestjs/common");
const document_service_1 = require("./services/document.service");
const create_document_dto_1 = require("./dto/create-document.dto");
const jwt_auth_guard_1 = require("../auth/strategy/jwt-auth.guard");
const document_entity_1 = require("./entities/document.entity");
const swagger_1 = require("@nestjs/swagger");
const update_document_dto_1 = require("./dto/update-document.dto");
const get_user_decorator_1 = require("../../shared/decorators/get-user.decorator");
const enduser_entity_1 = require("../users/enduser/entities/enduser.entity");
const set_document_access_1 = require("./dto/set-document-access");
let DocumentController = class DocumentController {
    constructor(documentService) {
        this.documentService = documentService;
    }
    create(createDocumentDto, endUser) {
        return this.documentService.createDocument(createDocumentDto, endUser.id);
    }
    getUsersDocuments(endUser) {
        return this.documentService.getDocumentsByUserId(endUser.id);
    }
    getDocument(id, endUser) {
        return this.documentService.getDocumentById(id, endUser.id);
    }
    setDocumentAccessType(id, setDocumentAccessTypeDto, endUser) {
        return this.documentService.setDocumentAccessType(setDocumentAccessTypeDto, id, endUser.id);
    }
    updateDocument(id, updateDocumentDto, endUser) {
        return this.documentService.updateDocument(updateDocumentDto, id, endUser.id);
    }
    removeDocument(id, endUser) {
        return this.documentService.deleteDocument(id, endUser.id);
    }
};
exports.DocumentController = DocumentController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: document_entity_1.DocumentEntity }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_document_dto_1.CreateDocumentDto, enduser_entity_1.EndUserMinimal]),
    __metadata("design:returntype", void 0)
], DocumentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('your-documents'),
    __param(0, (0, get_user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [enduser_entity_1.EndUserMinimal]),
    __metadata("design:returntype", void 0)
], DocumentController.prototype, "getUsersDocuments", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, enduser_entity_1.EndUserMinimal]),
    __metadata("design:returntype", void 0)
], DocumentController.prototype, "getDocument", null);
__decorate([
    (0, common_1.Patch)(':id/access'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, get_user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, set_document_access_1.SetDocumentAccessTypeDto,
        enduser_entity_1.EndUserMinimal]),
    __metadata("design:returntype", void 0)
], DocumentController.prototype, "setDocumentAccessType", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, get_user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_document_dto_1.UpdateDocumentDto,
        enduser_entity_1.EndUserMinimal]),
    __metadata("design:returntype", void 0)
], DocumentController.prototype, "updateDocument", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, enduser_entity_1.EndUserMinimal]),
    __metadata("design:returntype", void 0)
], DocumentController.prototype, "removeDocument", null);
exports.DocumentController = DocumentController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('documents'),
    (0, swagger_1.ApiTags)('documents'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [document_service_1.DocumentService])
], DocumentController);
//# sourceMappingURL=document.controller.js.map