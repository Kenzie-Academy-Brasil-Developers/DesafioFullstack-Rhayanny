import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  readClientsByIdController,
  readClientsController,
  updateClientController,
} from "../controllers/clientController";
import {
  clientValidation,
  verifyUniqueClientEmail,
} from "../middlewares/clientMiddlewares";
import { validateBody, verifyToken } from "../middlewares/tokenValidation";
import {
  clientCreateSchema,
  clientUpdateSchema,
} from "../schemas/clientSchema";

export const clientsRoutes = Router();

clientsRoutes.post(
  "/",
  validateBody(clientCreateSchema),
  verifyUniqueClientEmail,
  createClientController
);

clientsRoutes.use(verifyToken);

clientsRoutes.get("/", readClientsController);

clientsRoutes.get("/:id", clientValidation, readClientsByIdController);

clientsRoutes.patch(
  "/:id",
  validateBody(clientUpdateSchema),
  clientValidation,
  updateClientController
);

clientsRoutes.delete("/:id", clientValidation, deleteClientController);
