import express from "express";
import type { Request, Response } from "express";

const app = express();

app.use((_req: Request, res: Response) => {
  res.json({
    resource: "https://sample-mcp-pttgpnn83-aembit.vercel.app",
    authorization_servers: ["https://22a7a6.mcp.qa.aembit-eng.com"],
    scopes_supported: ["offline_access"],
    bearer_methods_supported: ["header"],
  });
});

export default app;
