import { PostgresUsersRepositories } from "./../repository/implementations/PostgresUsersRepositories";
import { CreateUserUseCase } from "./CreateUser/CreateUserUseCase";
import { CreateUserController } from "./CreateUser/CreateUserController";
import { FindUserUseCase } from "./FindUser/FindUserUseCase";
import { FindUserController } from "./FindUser/FindUserController";
import { DeleteUserUseCase } from "./DeleteUser/DeleteUserUseCase";
import { DeleteUserController } from "./DeleteUser/DeleteUserController";
import { UpdateUserUseCase } from "./UpdateUser/UpdateUserUseCase";
import { UpdateUserController } from "./UpdateUser/UpdateUserController";
import { AuthenticateUserUseCase } from "./Authenticate/AuthenticateUserUseCase";
import { AuthenticateUserController } from "./Authenticate/AuthenticateUserController";
import { ListUsersUseCase } from "./ListUsers/ListUsersUseCase";
import { ListUsersController } from "./ListUsers/ListUsersController";

const postgresUsersRepositories = new PostgresUsersRepositories();

const createUserUseCase = new CreateUserUseCase(postgresUsersRepositories);
const createUserController = new CreateUserController(createUserUseCase);

const findUserUseCase = new FindUserUseCase(postgresUsersRepositories);
const findUserController = new FindUserController(findUserUseCase);

const deleteUserUseCase = new DeleteUserUseCase(postgresUsersRepositories);
const deleteUserController = new DeleteUserController(deleteUserUseCase);

const updateUserUseCase = new UpdateUserUseCase(postgresUsersRepositories);
const updateUserController = new UpdateUserController(updateUserUseCase);

const authenticateUserUseCase = new AuthenticateUserUseCase(
  postgresUsersRepositories
);
const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase
);

const listUsersUseCase = new ListUsersUseCase(postgresUsersRepositories);
const listUsersController = new ListUsersController(listUsersUseCase);

export {
  createUserUseCase,
  createUserController,
  findUserController,
  deleteUserController,
  updateUserController,
  authenticateUserController,
  listUsersController,
};
