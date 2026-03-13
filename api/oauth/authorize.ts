import crypto from "node:crypto";
import express from "express";
import type { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  const { redirect_uri, state } = req.query as Record<string, string>;

  if (!redirect_uri) {
    res.status(400).json({ error: "redirect_uri is required" });
    return;
  }

  const code = crypto.randomUUID();
  const url = new URL(redirect_uri);
  url.searchParams.set("code", code);
  if (state) {
    url.searchParams.set("state", state);
  }

  res.redirect(url.toString());
});

export default app;
