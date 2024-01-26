import { Router } from "express";
import { clientsRoutes } from "./clientRoute";
import { loginRoutes } from "./loginRoute";
import { contactsRoutes } from "./contactRoute";

export const routes: Router = Router();
routes.use("/clients", clientsRoutes);
routes.use("/login", loginRoutes);
routes.use("/contacts", contactsRoutes);
