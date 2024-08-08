import { User } from "../../models/User";
import { IUsersRepository } from "../../repository/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository) {}

  async execute(data: ICreateUserRequestDTO) {
    const userProps = {
      name: data.name,
      email: data.email,
    };

    const user = new User(userProps);

    await user.setPassword(data.password); // Definindo a senha

    await this.usersRepository.save(user);

    console.log("User created:", user);
  }
}
