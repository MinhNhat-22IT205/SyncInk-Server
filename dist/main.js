"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_config_1 = require("./core/config/swagger.config");
const prisma_client_exception_filter_1 = require("./core/global-exception-filter/prisma-client-exception/prisma-client-exception.filter");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.setGlobalPrefix('v1');
    app.useGlobalPipes(new common_1.ValidationPipe());
    const { httpAdapter } = app.get(core_1.HttpAdapterHost);
    app.useGlobalFilters(new prisma_client_exception_filter_1.PrismaClientExceptionFilter(httpAdapter));
    (0, swagger_config_1.createSwaggerDocument)(app);
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map