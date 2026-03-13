import crypto from "node:crypto";
import express from "express";
import type { Request, Response } from "express";

const app = express();
app.use(express.json());

app.use((req: Request, res: Response) => {
  const body = req.body ?? {};
  const now = Math.floor(Date.now() / 1000);
  res.status(201).json({
    client_id: `chatgpt_${crypto.randomBytes(16).toString("hex")}`,
    client_name: body.client_name ?? "unknown",
    redirect_uris: body.redirect_uris ?? [],
    grant_types: body.grant_types ?? ["authorization_code"],
    response_types: body.response_types ?? ["code"],
    token_endpoint_auth_method: body.token_endpoint_auth_method ?? "client_secret_post",
    scope: body.scope ?? "read write",
    client_id_issued_at: now,
    client_secret: crypto.randomBytes(32).toString("base64url"),
    client_secret_expires_at: now + 31536000,
  });
});

export default app;
