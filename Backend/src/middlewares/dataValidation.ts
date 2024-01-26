import { Request, Response, NextFunction } from "express";
import { z } from "zod";

const dateSchema = z.date();

export const dateValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validatedDate = dateSchema.parse(req.body.date);
  req.body.date = validatedDate;
  return next();
};
