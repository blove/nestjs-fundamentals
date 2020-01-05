import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { Module } from '@nestjs/common';

import { DistilleryApiController } from './distillery-api.controller';

@Module({
  controllers: [DistilleryApiController],
  imports: [InMemoryDBModule.forFeature('distillery')],
})
export class DistilleryApiModule {}
