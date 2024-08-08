import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    try {
      await this.createUserUseCase.execute({ name, email, password });
      return response.status(201).send();
    } catch (error: any) {
      if (error.message === "User already exists") {
        return response.status(409).json({ message: error.message });
      }
      return response.status(400).json({ message: "Error when creating user" });
    }
  }
}
