import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

interface UserEntity extends InMemoryDBEntity {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
}
