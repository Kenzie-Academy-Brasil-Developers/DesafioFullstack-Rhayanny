import "dotenv/config";
import { sign } from "jsonwebtoken";
import { repoClient } from "../repositories";
import { AppError } from "../errors/appError";
import { compare } from "bcryptjs";
import { Client } from "../entities/clientsEntitie";
import { ClientLogin, ClientReturnLogin } from "../interfaces/loginInterface";

export const loginService = async (
  data: ClientLogin
): Promise<ClientReturnLogin> => {
  const { email } = data;
  const client: Client | null = await repoClient.findOneBy({ email });

  if (!client) throw new AppError("Invalid credentials", 401);

  const comparePass = await compare(data.password, client.password);

  if (!comparePass) throw new AppError("Invalid credentials", 401);

  const token: string = sign({ email: client.email }, process.env.SECRET_KEY!, {
    subject: client.id.toString(),
    expiresIn: process.env.EXPIRES_IN!,
  });

  return {
    token: token,
    client: {
      id: client.id,
      name: client.name,
      email: client.email,
      phone: client.phone
    },
  };
};
