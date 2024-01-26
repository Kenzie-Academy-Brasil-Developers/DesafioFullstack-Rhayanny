import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleAppError } from "./errors/handleAppError";
import { routes } from "./routes";

const app = express();
app.use(express.json());
app.use("/", routes);
app.use(handleAppError);

export default app;
