import "express-async-errors";
import "reflect-metadata";
import express from "express";
import { handleAppError } from "./errors/handleAppError";
import cors from "cors";
import { routes } from "./routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", routes);
app.use(handleAppError);

export default app;
