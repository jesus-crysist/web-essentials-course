import { Module } from '@nestjs/common';

import { CrmApiController } from './crm-api.controller';
import { CrmApiService } from './crm-api.service';

@Module({
  imports: [],
  controllers: [CrmApiController],
  providers: [CrmApiService]
})
export class CrmApiModule {}
