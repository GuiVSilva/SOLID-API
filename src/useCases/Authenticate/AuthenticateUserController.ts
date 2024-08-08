import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    try {
      const { user, token } = await this.authenticateUserUseCase.execute({
        email,
        password,
      });
      return response.status(200).json({ user, token });
    } catch (error: any) {
      if (
        error.message === "User not found" ||
        error.message === "Invalid password"
      ) {
        return response.status(401).json({ message: error.message });
      }
      return response
        .status(400)
        .json({ message: "Error during authentication" });
    }
  }
}
