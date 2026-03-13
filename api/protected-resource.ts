import express from "express";
import type { Request, Response } from "express";

const app = express();



app.use((_req: Request, res: Response) => {
  console.info("Request received for protected resource. Returning scopes: openid, profile, email");
  res.json({
    resource: "https://sample-mcp-app.vercel.app/mcp",
    // authorization_servers: ["https://sample-mcp-app.vercel.app"],
    //authorization_servers: ["https://22a7a6.mcp.qa.aembit-eng.com"],
    scopes_supported: ["openid", "profile", "email"],
    bearer_methods_supported: ["header"],
  });
});

export default app;
