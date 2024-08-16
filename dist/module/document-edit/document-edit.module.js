"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentEditModule = void 0;
const common_1 = require("@nestjs/common");
const document_service_1 = require("../document/services/document.service");
const document_edit_gateway_1 = require("./document-edit.gateway");
const document_module_1 = require("../document/document.module");
const document_repository_1 = require("../document/repository/document.repository");
const prisma_module_1 = require("../prisma/prisma.module");
const document_access_module_1 = require("../document-access/document-access.module");
const document_access_repository_1 = require("../document-access/repository/document-access.repository");
const document_access_service_1 = require("../document-access/document-access.service");
let DocumentEditModule = class DocumentEditModule {
};
exports.DocumentEditModule = DocumentEditModule;
exports.DocumentEditModule = DocumentEditModule = __decorate([
    (0, common_1.Module)({
        imports: [document_module_1.DocumentModule, prisma_module_1.PrismaModule, document_access_module_1.DocumentAccessModule],
        providers: [
            document_edit_gateway_1.DocumentEditGateway,
            document_service_1.DocumentService,
            document_repository_1.DocumentRepository,
            document_access_repository_1.DocumentAccessRepository,
            document_access_service_1.DocumentAccessService,
        ],
    })
], DocumentEditModule);
//# sourceMappingURL=document-edit.module.js.map