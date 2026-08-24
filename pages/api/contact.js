export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing fields" });
  }
  // TODO: integrasikan dengan layanan email (Resend, Nodemailer, SendGrid, dll)
  console.log("New contact message:", { name, email, message });
  return res.status(200).json({ message: "ok" });
}
