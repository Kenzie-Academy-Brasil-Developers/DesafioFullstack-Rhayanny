import { Router } from "express";
import {
  contactCreationController,
  contactDeletionController,
  contactListByIdController,
  contactListController,
  contactUpdatingController,
} from "../controllers/contactController";
import { validateBody, verifyToken } from "../middlewares/tokenValidation";
import {
  contactCreateSchema,
  contactUpdateSchema,
} from "../schemas/contactSchema";
import { contactValidation } from "../middlewares/contactValidation";

export const contactsRoutes = Router();

contactsRoutes.use(verifyToken);

contactsRoutes.post(
  "/",
  validateBody(contactCreateSchema),
  contactCreationController
);
contactsRoutes.get("/", contactListController);

contactsRoutes.get("/:id", contactValidation, contactListByIdController);

contactsRoutes.patch(
  "/:id",
  contactValidation,
  validateBody(contactUpdateSchema),
  contactUpdatingController
);

contactsRoutes.delete("/:id", contactValidation, contactDeletionController);
