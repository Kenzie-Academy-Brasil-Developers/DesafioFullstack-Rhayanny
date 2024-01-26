import { Request, Response } from "express";
import {
  clientUpdatingService,
  contactCreationService,
  contactDeletionService,
  contactListingByIdService,
  contactListingService,
} from "../services/contactServece";
import { ContactUpdate } from "../interfaces/contactsInterface";

export const contactCreationController = async (
  req: Request,
  res: Response
) => {
  const id: number = Number(res.locals.clientId);
  const newContact = await contactCreationService(req.body, id);

  return res.status(201).json(newContact);
};

export const contactListController = async (req: Request, res: Response) => {
  const contacts = await contactListingService();

  return res.json(contacts);
};

export const contactListByIdController = async (
  req: Request,
  res: Response
) => {
  const contactId: number = Number(req.params.id);
  const contact = await contactListingByIdService(contactId);

  return res.json(contact);
};

export const contactUpdatingController = async (
  req: Request,
  res: Response
) => {
  const contactId: number = Number(req.params.id);
  const clientId: number = Number(res.locals.clientId);
  const updatedValues: ContactUpdate = req.body;
  const updateContact = await clientUpdatingService(
    updatedValues,
    contactId,
    clientId
  );
  return res.json(updateContact);
};

export const contactDeletionController = async (
  req: Request,
  res: Response
) => {
  const ContactId: number = Number(req.params.id);
  const clientId: number = Number(res.locals.clientId);
  await contactDeletionService(ContactId, clientId);
  res.status(204).send();
};
