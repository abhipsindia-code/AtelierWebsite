import { sendContactEmail } from "../utils/mailer.js";

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {

    await sendContactEmail(req.body);

    return res.status(200).json({ message: "Email sent" });

  } catch (err) {

    return res.status(500).json({ message: "Email failed" });

  }

}