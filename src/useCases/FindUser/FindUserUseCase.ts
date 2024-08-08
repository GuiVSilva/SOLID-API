import { User } from "../../models/User";
import { IUsersRepository } from "../../repository/IUsersRepository";

export class FindUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string): Promise<User | undefined> {
    return this.usersRepository.findById(id);
  }
}
