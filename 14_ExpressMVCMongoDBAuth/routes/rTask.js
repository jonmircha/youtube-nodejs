import { Router } from "express";
import cTask from "../controllers/cTask.js";

const routes = Router();

routes.get("/", cTask.getAll);
routes.get("/add", cTask.getAddForm);
routes.post("/add", cTask.create);
routes.get("/edit/:id", cTask.getEditForm);
routes.post("/edit/:id", cTask.update);
routes.get("/complete/:id", cTask.complete);
routes.get("/uncomplete/:id", cTask.uncomplete);
routes.get("/delete/:id", cTask.delete);

export default routes;
