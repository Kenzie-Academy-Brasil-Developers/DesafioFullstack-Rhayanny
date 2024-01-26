import { Request, Response, NextFunction } from "express";
import { repoContact } from "../repositories";

export const contactValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactId: number = Number(req.params.id);

  const contact = await repoContact.findOneBy({
    id: contactId,
  });

  if (!contact) {
    return res.status(404).json({
      message: "Contact not found",
    });
  }
  return next();
};
