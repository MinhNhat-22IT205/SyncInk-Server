"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentAccessModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../prisma/prisma.module");
const document_access_controller_1 = require("./document-access.controller");
const document_access_service_1 = require("./document-access.service");
const document_service_1 = require("../document/services/document.service");
const document_repository_1 = require("../document/repository/document.repository");
const document_module_1 = require("../document/document.module");
const document_access_repository_1 = require("./repository/document-access.repository");
let DocumentAccessModule = class DocumentAccessModule {
};
exports.DocumentAccessModule = DocumentAccessModule;
exports.DocumentAccessModule = DocumentAccessModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, (0, common_1.forwardRef)(() => document_module_1.DocumentModule)],
        controllers: [document_access_controller_1.DocumentAccessController],
        providers: [document_access_service_1.DocumentAccessService, document_access_repository_1.DocumentAccessRepository, document_service_1.DocumentService, document_repository_1.DocumentRepository],
    })
], DocumentAccessModule);
//# sourceMappingURL=document-access.module.js.map