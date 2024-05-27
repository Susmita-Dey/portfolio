import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, location, price, company, message } = await req.json();

    const emailContent = `
      Name: ${name}
      Email: ${email}
      Location: ${location}
      Price: ${price}
      Company: ${company}
      Message: ${message}
    `;

    try {
      const response = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "susmitadeybusiness@gmail.com",
        subject: "Somebody is looking for you, Susmita!",
        text: emailContent,
      });

      if (response.error) {
        console.error("Error sending email:", response.error);
        return NextResponse.json({ error: response.error }, { status: 500 });
      } else {
        console.log("Email sent successfully:", response.data);
        return NextResponse.json({ data: response.data }, { status: 200 });
      }
    } catch (error) {
      console.error("Fetch error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error parsing request:", error);
    return NextResponse.json(
      { error: "Invalid request payload" },
      { status: 400 }
    );
  }
}
