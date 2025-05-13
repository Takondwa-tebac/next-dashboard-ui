
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../lib/session";

export default withIronSessionApiRoute(async function logoutRoute(req, res) {
  if (req.method === "POST") {
    try {
      req.session.destroy();
      await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${req.session.user?.token}`,
        },
      }).catch((err) => {
        console.error("Failed to log out on backend:", err);
      });

      return res.status(200).json({ success: true, message: "Logged out successfully." });
    } catch (error) {
      console.error("Logout error:", error);
      return res.status(500).json({ success: false, message: "Failed to log out." });
    }
  }
  
  return res.status(405).json({ error: "Method not allowed" });
}, sessionOptions);
