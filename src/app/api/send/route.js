import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.FROM_EMAIL;
const bandEmail = process.env.BAND_EMAIL;

function validateCaptcha(captchaToken, captchaAnswer) {
  if (!captchaToken || !captchaAnswer) {
    return false;
  }

  try {
    // Parse the token: "num1-operator-num2-timestamp"
    const parts = captchaToken.split("-");
    if (parts.length !== 4) return false;

    const num1 = parseInt(parts[0]);
    const operator = parts[1];
    const num2 = parseInt(parts[2]);
    const timestamp = parseInt(parts[3]);

    // Check if token is not too old (max 10 minutes)
    const tokenAge = Date.now() - timestamp;
    if (tokenAge > 600000) {
      return false;
    }

    let correctAnswer;
    if (operator === "+") {
      correctAnswer = num1 + num2;
    } else if (operator === "-") {
      correctAnswer = num1 - num2;
    } else if (operator === "×") {
      correctAnswer = num1 * num2;
    } else {
      return false;
    }

    return parseInt(captchaAnswer) === correctAnswer;
  } catch (e) {
    return false;
  }
}

export async function POST(req, res) {
  // Initialize Resend only when the API is called, not during build
  if (!resendApiKey) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  const resend = new Resend(resendApiKey);
  const { email, subject, message, captchaToken, captchaAnswer } = await req.json();

  // Validate captcha
  if (!validateCaptcha(captchaToken, captchaAnswer)) {
    return NextResponse.json({ error: "Captcha verification failed. Please solve the math problem correctly." }, { status: 400 });
  }

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
            We have received your message and appreciate you reaching out.
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
            We will get back to you ASAP! In the meantime.. Enjoy our music and stay up to date with us on social media.
          </p>
          <ul style={{ fontFamily: "Arial, sans-serif" }}>
            <li>
              <a
                href="https://distrokid.com/hyperfollow/expansionproject1/phenomenal-thought-2"
                style={{ color: "#387178" }}
              >
                Stream PHENOMENAL THOUGHT 🎵
              </a>
            </li>
            <li>
              <a
                href="https://distrokid.com/hyperfollow/expansionproject1/conscious-tortoise-2"
                style={{ color: "#387178" }}
              >
                Stream CONSIOUS TORTOISE 🎵
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
          <p style={{ fontFamily: "Arial, sans-serif" }}>Groove on!!!</p>
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
