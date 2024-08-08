import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const data = request.body;

    try {
      const updatedUser = await this.updateUserUseCase.execute(id, data);
      return response.status(200).json(updatedUser);
    } catch (error: any) {
      if (error.message === "User not found") {
        return response.status(404).json({ message: error.message });
      }
      return response.status(400).json({ message: "Error when updating user" });
    }
  }
}
