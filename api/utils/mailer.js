
import nodemailer from "nodemailer";

export async function sendContactEmail({ name, email, number, message }) {

  const transporter = nodemailer.createTransport({
    host: "mail.yourdomain.com",
    port: 465,
    secure: true,
    auth: {
      user: "hello@yourdomain.com",
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: "Website <hello@yourdomain.com>",
    to: "hello@yourdomain.com",
    subject: "New Website Enquiry",
    html: `
      <h3>New Contact Form</h3>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Number: ${number}</p>
      <p>Message: ${message}</p>
    `
  });

}