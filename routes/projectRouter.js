import express from "express";
import { addProject, getProjects, updateProject, deleteProject } from "../controllers/projectController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const projectRouter = express.Router();

projectRouter.get("/", getProjects);
projectRouter.post("/", verifyToken, addProject);
projectRouter.put("/", verifyToken, updateProject);
projectRouter.delete("/", verifyToken, deleteProject);

export default projectRouter;
