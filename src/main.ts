import { HttpAdapterHost, NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { createSwaggerDocument } from 'src/core/config/swagger.config';
import { PrismaClientExceptionFilter } from './core/global-exception-filter/prisma-client-exception/prisma-client-exception.filter';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('v1/api');

  //VALIDATION PIPE
  app.useGlobalPipes(new ValidationPipe());

  //HANDLE PRISMA MODEL EXCEPTIONS
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

  //SWAGGER
  createSwaggerDocument(app);

  await app.listen(3001);
}
bootstrap();
