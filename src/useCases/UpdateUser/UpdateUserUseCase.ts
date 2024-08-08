import { IUsersRepository } from "../../repository/IUsersRepository";
import { User } from "../../models/User";

interface IUpdateUserData {
  name?: string;
  email?: string;
  password?: string;
}

export class UpdateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string, data: IUpdateUserData): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new Error("User not found");
    }

    // Atualiza outras propriedades se existirem
    if (data.name) user.name = data.name;
    if (data.email) user.email = data.email;

    if (data.password) {
      await user.setPassword(data.password); // Atualiza a senha corretamente
    }

    // Salva o usuário atualizado no repositório
    await this.usersRepository.save(user);

    return user;
  }
}
