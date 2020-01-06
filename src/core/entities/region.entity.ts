import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface RegionEntity extends InMemoryDBEntity {
  id: number;
  name: string;
}
