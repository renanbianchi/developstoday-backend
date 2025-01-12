// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "@routes/router";
import bodyParser from "body-parser";

dotenv.config();

try {
  const app: Express = express();
  const port = process.env.PORT || 3002;
  
  app.use(cors());

  app.use(bodyParser.json());
  
  app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
  });

  app.use(routes);
  
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });

}
catch (error) {
  console.log(error);
}

