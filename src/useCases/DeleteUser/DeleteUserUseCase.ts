import { IUsersRepository } from "../../repository/IUsersRepository";

export class DeleteUserUseCase {
  constructor(private userRepository: IUsersRepository) {}

  async execute(id: string): Promise<void> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new Error("User not found");
    }

    await this.userRepository.delete(id);
  }
}
