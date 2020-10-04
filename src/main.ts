import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ApiKeyGuard } from './common/guards/api-key.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // If true, It will remove the additional data from post request which is not in dto
    forbidNonWhitelisted: false, // if trye server will throw error with exact extra data in payload
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
  }))
  app.useGlobalFilters(new HttpExceptionFilter())
  await app.listen(3000);
}
bootstrap();
