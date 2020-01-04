import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

interface DistilleryEntity extends InMemoryDBEntity {
  id: number;
  name: string;
  region: number;
  country: string;
  city: string;
}
