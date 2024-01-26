import { Response, Request } from "express";
import {
  ClientReadReturn,
  ClientReturn,
  clientUpdateRequest,
} from "../interfaces/clientInterface";
import {
  createClientService,
  deleteClientService,
  readClientByIdService,
  readclientService,
  updateClientService,
} from "../services/clientService";
import { clientUpdateSchema } from "../schemas/clientSchema";

export const createClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const client: ClientReturn = await createClientService(req.body);
  return res.status(201).json(client);
};

export const readClientsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clients: ClientReadReturn = await readclientService();
  return res.status(200).json(clients);
};

export const readClientsByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const clientsId = await readClientByIdService(Number(id));

  return res.status(200).json(clientsId);
};

export const updateClientController = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  const newClient: clientUpdateRequest = req.body;
  const updateClient = await updateClientService(newClient, id);

  return res.json(updateClient);
};

export const deleteClientController = async (req: Request, res: Response) => {
  const clientId = Number(req.params.id);
  await deleteClientService(clientId);
  res.status(204).send();
};
