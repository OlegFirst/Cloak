import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';

async function bootstrap() {
  const port = process.env.PORT ?? 8080;
  const app = await NestFactory.create(MainModule);
  await app.listen(port, () => console.log(`Server started on ${port} port`));
}

bootstrap();
