import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface DistilleryEntity extends InMemoryDBEntity {
  name: string;
  region: number;
  country: string;
  city: string;
}
