"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateViewerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_viewer_dto_1 = require("./create-viewer.dto");
class UpdateViewerDto extends (0, swagger_1.PartialType)(create_viewer_dto_1.AddViewerDto) {
}
exports.UpdateViewerDto = UpdateViewerDto;
//# sourceMappingURL=update-viewer.dto.js.map