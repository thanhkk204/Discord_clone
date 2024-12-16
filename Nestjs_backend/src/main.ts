import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DuplicateEntryFilter } from './utils/customeErrorMessage';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalFilters(new DuplicateEntryFilter());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
