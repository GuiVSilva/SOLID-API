import { IUsersRepository } from "../../repository/IUsersRepository";
import { IAuthenticateUserRequestDTO } from "./AuthenticateUserDTO";
import jwt from "jsonwebtoken";

export class AuthenticateUserUseCase {
  constructor(private userRepository: IUsersRepository) {}

  async execute({ email, password }: IAuthenticateUserRequestDTO) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }

    const token = jwt.sign({ id: user.id }, "your-secret-key", {
      expiresIn: "1h",
    });

    return { user, token };
  }
}
