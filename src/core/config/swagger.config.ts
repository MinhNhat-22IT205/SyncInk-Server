import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const config = new DocumentBuilder()
  .setTitle('SyncInk')
  .setDescription('A document mangement system')
  .setVersion('1.0')
  .addBearerAuth()
  .build();

export const createSwaggerDocument = (app: INestApplication<any>) => {
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
};
