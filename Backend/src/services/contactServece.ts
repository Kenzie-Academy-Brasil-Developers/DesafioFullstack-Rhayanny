import { Contact } from "../entities/contactsEntitie";
import { AppError } from "../errors/appError";
import {
  ContactCreate,
  ContactRead,
  ContactReturn,
  ContactUpdate,
} from "../interfaces/contactsInterface";
import { repoClient, repoContact } from "../repositories";
import { contactReadSchema, contactSchema } from "../schemas/contactSchema";

export const contactCreationService = async (
  clientData: ContactCreate,
  id: number
): Promise<ContactReturn> => {
  const findClient = await repoClient.find({
    where: { id: id },
    relations: ["contacts"],
  });

  if (!findClient) {
    throw new AppError("Client not found", 404);
  }

  const findContact = findClient[0].contacts.find(
    (elt) => elt.email === clientData.email
  );

  if (findContact) {
    throw new AppError("Contact already in use", 409);
  }

  const client = findClient[0];

  const contact = repoContact.create({ ...clientData, clients: client });

  await repoContact.save(contact);

  return contactSchema.parse(contact);
};

export const contactListingService = async (): Promise<ContactRead> => {
  const contacts: Array<Contact> = await repoContact.find({
    relations: {
      clients: true,
    },
  });

  return contactReadSchema.parse(contacts);
};

export const contactListingByIdService = async (
  contactId: number
): Promise<ContactReturn> => {
  const contact: Array<Contact> = await repoContact.find({
    where: { id: contactId },
    relations: {
      clients: true,
    },
  });

  if (!contact[0]) {
    throw new AppError("Contact not found or wrongfully typed", 404);
  }

  return contactSchema.parse(contact[0]);
};

export const clientUpdatingService = async (
  contactData: ContactUpdate,
  contactId: number,
  clientId: number
): Promise<ContactReturn> => {
  const oldData = await repoContact.findOneBy({
    id: contactId,
  });

  const findContact = await repoContact.findOne({
    where: { id: contactId },
    relations: ["clients"],
  });

  if (findContact!.clients.id !== clientId) {
    throw new AppError("You don't have permission", 409);
  }

  const contact: Contact = repoContact.create({
    ...oldData,
    ...contactData,
  });

  await repoContact.save(contact);

  return contactSchema.parse(contact);
};

export const contactDeletionService = async (
  contactId: number,
  clientId: number
): Promise<void> => {
  const contact = await repoContact.findOne({
    where: { id: contactId },
    relations: ["clients"],
  });

  if (contact!.clients.id !== clientId) {
    throw new AppError("You don't have permission", 409);
  }

  await repoContact.remove(contact!);
};
