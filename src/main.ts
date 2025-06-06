import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const port = process.env.PORT ?? 4000;

    const app = await NestFactory.create(MainModule);

    const config = new DocumentBuilder()
      .setTitle('Cloak')
      .setDescription('REST API documentation')
      .setVersion('1.0.0')
      .addTag('Test app')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);

    await app.listen(port, () => console.log(`Server started on ${port} port`));
}

bootstrap();
