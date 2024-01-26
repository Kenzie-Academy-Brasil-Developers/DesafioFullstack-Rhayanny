import { AppDataSource } from "./data-source";
import { Client } from "./entities/clientsEntitie";
import { Contact } from "./entities/contactsEntitie";
import { RepoClient } from "./interfaces/clientInterface";
import { RepoContact } from "./interfaces/contactsInterface";

export const repoClient: RepoClient = AppDataSource.getRepository(Client);

export const repoContact: RepoContact = AppDataSource.getRepository(Contact);
