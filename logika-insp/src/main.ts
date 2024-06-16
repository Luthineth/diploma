import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HealthModule } from './health/health.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // + Swagger Module
  const config = new DocumentBuilder()  
  .setTitle('Logika Inspector')  
  .setDescription('Инспектор для обрудования НПФ Логика')  
  .setVersion('0.1')  
  .build();

  const document = SwaggerModule.createDocument(app, config);  
  SwaggerModule.setup('swagger', app, document);
  
  // start app
  await app.listen(3000);
}
bootstrap();
