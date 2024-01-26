import { NextFunction, Request, Response } from "express";
import { Client } from "../entities/clientsEntitie";
import { AppError } from "../errors/appError";
import { AppDataSource } from "../data-source";
import { repoClient } from "../repositories";

export const verifyUniqueClientEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email } = req.body;
  const client: Client | null = await repoClient.findOneBy({ email });

  if (client) throw new AppError("Email already exists", 409);

  return next();
};

export const clientValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const clientRepo = AppDataSource.getRepository(Client);

  const clientId: number = Number(req.params.id);

  const client = await clientRepo.findOne({
    where: {
      id: clientId,
    },
  });

  if (!client) {
    return res.status(404).json({
      message: "Client not found or wrongfully entered",
    });
  }

  return next();
};
