import "reflect-metadata";
import express from "express";
// import errorMiddleware from "./middlewares/error.middleware";

const app = express();
app.use(express.json());
// app.use(errorMiddleware);

export default app;
