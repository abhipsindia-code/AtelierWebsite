import nodemailer from "nodemailer";

export async function sendContactEmail({ name, email, number, message }) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true, // 465 = SSL
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  const mailOptions = {
    from: `"Atelier Website" <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_OTP_INBOX,
    replyTo: email,
    subject: "New Website Enquiry",
    html: `
      <h2>New Contact Form Submission</h2>

      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${number}</p>

      <p><b>Message:</b></p>
      <p>${message}</p>
    `
  };

  const result = await transporter.sendMail(mailOptions);

  return result;
}