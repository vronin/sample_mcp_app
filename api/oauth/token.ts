import crypto from "node:crypto";
import express from "express";
import type { Request, Response } from "express";

const app = express();
app.use(express.urlencoded({ extended: false }));

app.use((_req: Request, res: Response) => {
  res.json({
    access_token: crypto.randomUUID(),
    token_type: "Bearer",
    expires_in: 3600,
    refresh_token: crypto.randomUUID(),
    scope: "offline_access",
  });
});

export default app;
