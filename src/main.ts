import { NestFactory } from '@nestjs/core';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import * as dotenv from 'dotenv';

import { AppModule } from './app.module';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
    .setTitle('NazanUtility')
    .setDescription('API for utilities')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  if (process.env.NODE_ENV === 'development') {
    SwaggerModule.setup('explorer', app, document);
  }

  await app.listen(process.env.DEFAULT_PORT || 3151);
}
bootstrap();
