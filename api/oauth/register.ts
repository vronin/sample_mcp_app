import crypto from "node:crypto";
import express from "express";
import type { Request, Response } from "express";

const app = express();
app.use(express.json());

app.use((req: Request, res: Response) => {
  res.status(201).json({
    ...req.body,
    client_id: crypto.randomUUID(),
    client_secret: crypto.randomUUID(),
  });
});

export default app;
