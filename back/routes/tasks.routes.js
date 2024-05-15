import { Router } from "express";
import { getTasks, getOneTask, createTask, updateTask, deleteTask } from "./controllers/controllers.js";

const router = Router()

router.post("/tasks", createTask)

router.get("/tasks", getTasks)

router.get("/tasks/:id", getOneTask)

router.put("/tasks/:id", updateTask)

router.delete("/tasks/:id", deleteTask)


export default router