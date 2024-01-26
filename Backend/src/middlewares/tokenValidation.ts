import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";
import jwt from "jsonwebtoken";

export const validateBody =
  (schema: ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction): void => {
    try {
      req.body = schema.parse(req.body);
    } catch (error) {
      console.log(error);
    }
    return next();
  };

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "insufficient permission: invalid token",
    });
  }
  const token = authorization.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY!, (error: any, decoded: any) => {
    if (error) {
      return res.status(401).json({
        message: "invalid token",
      });
    }

    res.locals.clientId = decoded.sub;
  });
  return next();
};
