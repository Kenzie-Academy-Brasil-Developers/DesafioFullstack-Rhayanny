import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";

import { Client } from "../entities/clientsEntitie";
import {
  clientCreateSchema,
  clientReadSchema,
  clientReturnSchema,
  clientSchemaComplete,
  clientSchemaCompleteResponse,
} from "../schemas/clientSchema";

export type ClientCreate = z.infer<typeof clientCreateSchema>;

export type ClientRead = z.infer<typeof clientReadSchema>;

export type ClientReadReturn = ClientReturn[];

export type ClientReturn = z.infer<typeof clientReturnSchema>;

export type clientUpdateRequest = DeepPartial<ClientCreate>;

export type RepoClient = Repository<Client>;

export type clientResComplete = z.infer<typeof clientSchemaCompleteResponse>;
export type clientResponseComplete = z.infer<typeof clientSchemaComplete>;
