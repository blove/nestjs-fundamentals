import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface UserEntity extends InMemoryDBEntity {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
}
