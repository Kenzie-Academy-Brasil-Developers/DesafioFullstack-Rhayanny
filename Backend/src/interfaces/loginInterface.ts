import { z } from "zod";
import { loginSchema } from "../schemas/loginSchema";

export type ClientLogin = z.infer<typeof loginSchema>;

export type ClientReturnLogin = {
  token: string;
  client: { id: number; email: string; name: string, phone: string};
};
