"use server";

export async function sendInquiry(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const dates = formData.get("dates");
  const guests = formData.get("guests");

  console.log({ name, email, dates, guests });
}
