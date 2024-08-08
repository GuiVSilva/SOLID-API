import { Request, Response } from "express";
import { FindUserUseCase } from "./FindUserUseCase";

export class FindUserController {
  constructor(private findUserUseCase: FindUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const user = await this.findUserUseCase.execute(id);
      if (user) {
        return response.status(200).json(user);
      } else {
        return response.status(404).json({ message: "User not found" });
      }
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}
