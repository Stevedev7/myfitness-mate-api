import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import errorHandler from "./handlers/error";

const app: Application = express();

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  let error = new Error("Not Found");
  res.status(404);
  next(error);
});

app.use(errorHandler);

app.listen(8080);
