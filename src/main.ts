import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.use(helmet());

  app.setGlobalPrefix('api').enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  await app.listen(3000);
}
bootstrap();
