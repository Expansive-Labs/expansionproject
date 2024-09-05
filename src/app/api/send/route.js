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
          <h1 style={{ color: "#387178", fontFamily: "Arial, sans-serif" }}>
            Thank you for contacting Expansion Project!
          </h1>
          <p style={{ fontFamily: "Arial, sans-serif" }}>
            We&apos;ve received your message and appreciate you reaching out.
            Here&apos;s a summary of what you sent:
          </p>
          <div
            style={{
              background: "#c0c0c0",
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
            In the meantime, enjoy our music and stay updated on social media!
          </p>
          <ul style={{ fontFamily: "Arial, sans-serif" }}>
            <li>
              <a
                href="https://distrokid.com/hyperfollow/expansionproject1/phenomenal-thought-2"
                style={{ color: "#387178" }}
              >
                Stream our latest album: PHENOMENAL THOUGHT
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/expansionproject/"
                style={{ color: "#387178" }}
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/expansionproject"
                style={{ color: "#387178" }}
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://linktr.ee/expansionproject"
                style={{ color: "#387178" }}
              >
                Linktree
              </a>
            </li>
            <li>
              <a
                href="https://www.expansionprojectmusic.com/"
                style={{ color: "#387178" }}
              >
                Website
              </a>
            </li>
          </ul>
          <p style={{ fontFamily: "Arial, sans-serif" }}>Rock on!</p>
          <p
            style={{
              fontFamily: "Arial, sans-serif, italic",
              fontWeight: "bold",
            }}
          >
            - EXP
          </p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
