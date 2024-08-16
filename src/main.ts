import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createSwaggerDocument } from 'src/core/config/swagger.config';
import { PrismaClientExceptionFilter } from './core/global-exception-filter/prisma-client-exception/prisma-client-exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { AllWsExceptionFilter } from './core/global-exception-filter/websocket/ws-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.setGlobalPrefix('v1');

  //VALIDATION PIPE
  app.useGlobalPipes(new ValidationPipe());

  //HANDLE PRISMA MODEL EXCEPTIONS
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

  //HANDLE WEBSOCKET EXCEPTIONS
  app.useGlobalFilters(new AllWsExceptionFilter());

  //SWAGGER
  createSwaggerDocument(app);

  await app.listen(3001);
}
bootstrap();
