/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import { NestFactory } from '@nestjs/core';

import { CrmApiModule } from './app/crm-api.module';

async function bootstrap() {
  const app = await NestFactory.create(CrmApiModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.port || 3333;
  app.enableCors({origin: 'http://localhost:4200'});
  await app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
