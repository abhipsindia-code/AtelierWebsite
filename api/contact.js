export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, number, message } = req.body;

  console.log("New contact:", name, email, number, message);

  return res.status(200).json({
    message: "Message received!",
  });
}