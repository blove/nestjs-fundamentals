import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { DistilleryApiModule } from './distillery-api/distillery-api.module';

@Module({
  imports: [InMemoryDBModule.forRoot(), DistilleryApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
