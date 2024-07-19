import { Router } from "express";
import cUser from "../controllers/cUser.js";

const routes = Router();

routes.get("/login", cUser.getLoginForm);
routes.post("/login", cUser.login);
routes.get("/signin", cUser.getSigninForm);
routes.post("/signin", cUser.signin);
routes.get("/logout", cUser.logout);

export default routes;
