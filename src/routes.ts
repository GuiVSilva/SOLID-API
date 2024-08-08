import { Router, request, response } from "express";
import {
  createUserController,
  deleteUserController,
  findUserController,
  updateUserController,
  authenticateUserController,
  listUsersController,
} from "./useCases";

const router = Router();

router.post("/users", (request, response) => {
  return createUserController.handle(request, response);
});

router.get("/users/:id", (request, response) => {
  return findUserController.handle(request, response);
});

router.delete("/users/:id", (request, response) => {
  return deleteUserController.handle(request, response);
});

router.put("/users/:id", (request, response) => {
  return updateUserController.handle(request, response);
});

router.post("/login", (request, response) => {
  return authenticateUserController.handle(request, response);
});

router.get("/users", (request, response) => {
  return listUsersController.handle(request, response);        
});

export { router };
