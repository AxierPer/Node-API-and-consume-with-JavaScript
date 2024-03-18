import { Router } from "express";
import { methods as userController } from "../controllers/user.controller";

const router = Router();

router.get("/", userController.getUsers)

router.get("/:Id", userController.getUser)

router.post("/add", userController.addUser)

router.delete("/delete/:Id", userController.deleteUser) 

router.put("/update/:Id", userController.updateUser)

export default router;