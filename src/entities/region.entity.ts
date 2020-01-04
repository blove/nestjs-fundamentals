import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

interface RegionEntity extends InMemoryDBEntity {
  id: number;
  name: string;
}
