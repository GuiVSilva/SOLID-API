import { User } from "../models/User";

export interface IUsersRepository {
  findById(id: string): Promise<User | undefined>;
  save(user: User): Promise<void>;
  delete(id: string): Promise<void>;
  update(id: string, data: Partial<User>): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
  findAll(): Promise<User[]>;
}
