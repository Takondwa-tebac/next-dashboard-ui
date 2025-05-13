
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "@/lib/session";

export default withIronSessionApiRoute(async function loginRoute(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const { user, api_token } = await response.json();

      req.session.user = { ...user, token: api_token }; 
      await req.session.save();

      return res.status(200).json({ success: true, user });
    }

    return res.status(response.status).json({ error: "Invalid credentials" });
  }

  return res.status(405).json({ error: "Method not allowed" });
}, sessionOptions);
