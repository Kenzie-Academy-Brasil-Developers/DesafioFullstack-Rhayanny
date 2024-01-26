import { z } from "zod";
import { contactSchemaResponse } from "./contactSchema";

export const clientSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().max(200).min(3),
  email: z.string().email().max(45).min(4),
  phone: z.string(),
  password: z.string().max(120).min(4),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const clientCreateSchema = clientSchema.pick({
  name: true,
  email: true,
  phone: true,
  password: true,
});
export const clientReturnSchema = clientSchema.omit({ password: true });

export const clientUpdateSchema = clientSchema.omit({ id: true }).partial();

export const clientReturnListSchema = z.array(clientReturnSchema);

export const clientReadSchema = clientReturnSchema.array();

export const clientSchemaCompleteResponse = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  contacts: z.array(contactSchemaResponse),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const clientSchemaComplete = z.array(clientSchemaCompleteResponse);
