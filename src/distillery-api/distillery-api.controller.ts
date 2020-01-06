import {
  Controller,
  Get,
  Param,
  Body,
  Put,
  Post,
  Delete,
} from '@nestjs/common';
import {
  InjectInMemoryDBService,
  InMemoryDBService,
} from '@nestjs-addons/in-memory-db';

import { DistilleryEntity } from '../core';

@Controller('distillery')
export class DistilleryApiController {
  constructor(
    @InjectInMemoryDBService('distillery')
    private distilleryService: InMemoryDBService<DistilleryEntity>,
  ) {}

  @Post()
  async createDistillery(@Body() distillery: Partial<DistilleryEntity>) {
    return this.distilleryService.create(distillery);
  }

  @Delete(':id')
  deleteDistilleryById(@Param('id') id) {
    return this.distilleryService.delete(id);
  }

  @Get()
  getAll(): DistilleryEntity[] {
    return this.distilleryService.getAll();
  }

  @Get(':id')
  getDistilleryById(@Param('id') id) {
    return this.distilleryService.get(id);
  }

  @Put(':id')
  updateDistilleryById(@Param('id') id, @Body() distillery: DistilleryEntity) {
    id = id * 1; // Convert to number, not the best way to handle this
    return this.distilleryService.update({ ...distillery, id });
  }
}
