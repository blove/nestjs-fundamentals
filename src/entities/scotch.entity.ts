import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

import { CaskType } from '../enums';

interface ScotchEntity extends InMemoryDBEntity {
  id: number;
  distillery: number;
  name: string;
  caskType: CaskType;
  age: number;
  strength: number;
  price: number;
  size: number;
}
