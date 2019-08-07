import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // set global prefix to route
  app.setGlobalPrefix('api');

  // global pipes
  app.useGlobalPipes(new ValidationPipe());

  // serve app in port 8080;
  await app.listen(8080);
}
bootstrap();
