"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentModule = void 0;
const common_1 = require("@nestjs/common");
const document_service_1 = require("./services/document.service");
const document_controller_1 = require("./document.controller");
const document_repository_1 = require("./repository/document.repository");
const prisma_module_1 = require("../prisma/prisma.module");
const document_access_service_1 = require("../document-access/document-access.service");
const document_access_repository_1 = require("../document-access/repository/document-access.repository");
const document_access_module_1 = require("../document-access/document-access.module");
let DocumentModule = class DocumentModule {
};
exports.DocumentModule = DocumentModule;
exports.DocumentModule = DocumentModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, (0, common_1.forwardRef)(() => document_access_module_1.DocumentAccessModule)],
        controllers: [document_controller_1.DocumentController],
        providers: [document_service_1.DocumentService, document_repository_1.DocumentRepository, document_access_service_1.DocumentAccessService, document_access_repository_1.DocumentAccessRepository],
    })
], DocumentModule);
//# sourceMappingURL=document.module.js.map