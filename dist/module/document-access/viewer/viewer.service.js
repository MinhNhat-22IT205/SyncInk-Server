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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewerService = void 0;
const common_1 = require("@nestjs/common");
const viewer_repository_1 = require("./repository/viewer.repository");
let ViewerService = class ViewerService {
    constructor(viewerRepository) {
        this.viewerRepository = viewerRepository;
    }
    async addViewer(addViewerDto) {
        return this.viewerRepository.create(addViewerDto);
    }
    async getViewersFromDocumentId(getDocumentViewersDto) {
        return this.viewerRepository.findMany({
            where: { documentId: getDocumentViewersDto.documentId },
            include: { document: true, endUser: true },
        });
    }
    async getViewerById(getViewerDto) {
        return this.viewerRepository.findOne({
            where: { id: getViewerDto.viewerId },
            include: { document: true, endUser: true },
        });
    }
    async removeViewerById(removeViewerDto) {
        return this.viewerRepository.delete(removeViewerDto.viewerId);
    }
};
exports.ViewerService = ViewerService;
exports.ViewerService = ViewerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [viewer_repository_1.ViewerRepository])
], ViewerService);
//# sourceMappingURL=viewer.service.js.map