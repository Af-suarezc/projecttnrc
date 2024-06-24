import express from "express";
import {categoriesInfo, addTaskInfo, getTasksByCat, getAllTasks} from "./controllerdb.js";

const router = express.Router();

router.get("/categories", categoriesInfo);
router.post("/newTask", addTaskInfo);
router.get("/taskCat/:id", getTasksByCat)
router.get("/getall", getAllTasks);


export default router;