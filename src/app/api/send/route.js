import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const bandEmail = process.env.BAND_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, bandEmail, email],
      subject: `Expansion Project: ${subject}`,
      react: (
        <>
          <h1 style={{ color: "#38d57c", fontFamily: "Arial, sans-serif" }}>
            Thank you for contacting Expansion Project!
          </h1>
          <p style={{ fontFamily: "Arial, sans-serif" }}>
            We've received your message and appreciate you reaching out. Here's
            a summary of what you sent:
          </p>
          <div
            style={{
              background: "#f0f0f0",
              padding: "15px",
              borderRadius: "5px",
              margin: "15px 0",
            }}
          >
            <h2 style={{ color: "#333", fontFamily: "Arial, sans-serif" }}>
              Subject: {subject}
            </h2>
            <p
              style={{
                color: "#555",
                fontFamily: "Arial, sans-serif",
                whiteSpace: "pre-wrap",
              }}
            >
              {message}
            </p>
          </div>
          <p style={{ fontFamily: "Arial, sans-serif" }}>
            We'll get back to you as soon as possible. In the meantime, feel
            free to check out our latest updates on our social media channels:
          </p>
          <ul style={{ fontFamily: "Arial, sans-serif" }}>
            <li>
              <a
                href="https://www.instagram.com/expansionproject/"
                style={{ color: "#38d57c" }}
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/expansionproject"
                style={{ color: "#38d57c" }}
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://linktr.ee/expansionproject"
                style={{ color: "#38d57c" }}
              >
                Linktree
              </a>
            </li>
          </ul>
          <p style={{ fontFamily: "Arial, sans-serif" }}>Rock on!</p>
          <p style={{ fontFamily: "Arial, sans-serif", fontWeight: "bold" }}>
            The Expansion Project Team
          </p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
