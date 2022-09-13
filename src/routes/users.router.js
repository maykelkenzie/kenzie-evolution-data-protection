import { Router } from "express";
import { createUserController, listSpecificUserController, listUsersController } from "../controllers/users.controller.js";


const usersRouter = Router()


usersRouter.post('', createUserController)
usersRouter.get('', listUsersController)
usersRouter.get('/:id', listSpecificUserController)

export default usersRouter