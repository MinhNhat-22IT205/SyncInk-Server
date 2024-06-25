"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSwaggerDocument = exports.config = void 0;
const swagger_1 = require("@nestjs/swagger");
exports.config = new swagger_1.DocumentBuilder()
    .setTitle('SyncInk')
    .setDescription('A document mangement system')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
const createSwaggerDocument = (app) => {
    const document = swagger_1.SwaggerModule.createDocument(app, exports.config);
    swagger_1.SwaggerModule.setup('api', app, document);
};
exports.createSwaggerDocument = createSwaggerDocument;
//# sourceMappingURL=swagger.config.js.map