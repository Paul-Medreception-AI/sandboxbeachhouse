"use server";

import { Resend } from "resend";

export async function sendInquiry(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const dates = formData.get("dates");
  const guests = formData.get("guests");

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is missing; inquiry email not sent", {
      name,
      email,
      dates,
      guests,
    });
    return;
  }

  const resend = new Resend(apiKey);

  const safeName = typeof name === "string" ? name : "";
  const safeEmail = typeof email === "string" ? email : "";
  const safeDates = typeof dates === "string" ? dates : "";
  const safeGuests = typeof guests === "string" ? guests : "";

  try {
    await resend.emails.send({
      from: "Sandbox Beach House <inquiries@sandboxbeachhouse.com>",
      to: ["sandboxami2020@gmail.com"],
      replyTo: safeEmail || undefined,
      subject: `New Sandbox Inquiry: ${safeDates || "(no dates provided)"}`,
      html: `
        <h2>New Booking Inquiry</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Dates:</strong> ${safeDates}</p>
        <p><strong>Guests:</strong> ${safeGuests}</p>
      `,
    });
  } catch (error) {
    console.error("Failed to send Sandbox inquiry email", error);
  }
}
