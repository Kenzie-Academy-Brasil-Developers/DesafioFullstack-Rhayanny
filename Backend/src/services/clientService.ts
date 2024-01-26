import { Client } from "../entities/clientsEntitie";
import { AppError } from "../errors/appError";
import {
  ClientCreate,
  ClientReadReturn,
  ClientReturn,
  clientUpdateRequest,
} from "../interfaces/clientInterface";
import { repoClient } from "../repositories";
import {
  clientReturnListSchema,
  clientReturnSchema,
} from "../schemas/clientSchema";

export const createClientService = async (
  data: ClientCreate
): Promise<ClientReturn> => {
  const newClient: Client = repoClient.create(data);
  await repoClient.save(newClient);
  return clientReturnSchema.parse(newClient);
};

export const readclientService = async (): Promise<ClientReadReturn> => {
  const client: Client[] = await repoClient.find();

  return clientReturnListSchema.parse(client);
};

export const readClientByIdService = async (id: number): Promise<Client> => {
  const clients: Client | null = await repoClient.findOne({
    where: {
      id,
    },
    relations: {
      contacts: true,
    },
  });

  if (!clients) throw new AppError("Client not found", 404);

  return clients;
};

export const updateClientService = async (
  data: clientUpdateRequest,
  id: number
): Promise<ClientReturn> => {
  const dataPrevious = await repoClient.findOneBy({ id: id });
  const client: Client = repoClient.create({
    ...dataPrevious,
    ...data,
  });

  await repoClient.save(client);
  return clientReturnSchema.parse(client);
};

export const deleteClientService = async (clientId: number): Promise<void> => {
  const client: Client | null = await repoClient.findOneBy({ id: clientId });

  if (!client) {
    throw new AppError("Client not found", 404);
  }

  await repoClient.remove(client);
};
