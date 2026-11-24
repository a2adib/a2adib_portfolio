import { NextResponse } from "next/server";
import { personal } from "@/lib/data";

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  website?: string; // honeypot
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    // Silent drop for bots filling hidden honeypot field
    if (body.website && body.website.trim().length > 0) {
      return NextResponse.json({ ok: true, message: "Transmission received." });
    }

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const subject = (body.subject || "Portfolio Mission Brief").trim();
    const message = (body.message || "").trim();

    if (name.length < 2) {
      return NextResponse.json(
        { ok: false, error: "Please enter your name (at least 2 characters)." },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { ok: false, error: "Please write a slightly longer message (at least 10 characters)." },
        { status: 400 }
      );
    }

    // Provider 1: Resend API (when RESEND_API_KEY is configured in .env.local or Vercel)
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const fromAddress =
        process.env.CONTACT_FROM_EMAIL || "Portfolio Comms <onboarding@resend.dev>";

      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromAddress,
          to: [personal.email],
          reply_to: email,
          subject: `[Portfolio] ${subject}`,
          text: `From: ${name} <${email}>\nSubject: ${subject}\n\n${message}`,
        }),
      });

      if (!resendRes.ok) {
        const errText = await resendRes.text();
        return NextResponse.json(
          { ok: false, error: `Email delivery failed: ${errText}` },
          { status: 502 }
        );
      }

      return NextResponse.json({
        ok: true,
        provider: "resend",
        message: "Transmission delivered straight to Abdullah's inbox.",
      });
    }

    // Provider 2: Zero-config FormSubmit AJAX relay to personal.email
    const formSubmitRes = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(personal.email)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          _replyto: email,
          _subject: `[Portfolio] ${subject}`,
          message,
          _template: "table",
          _captcha: "false",
        }),
      }
    );

    if (!formSubmitRes.ok) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Relay could not deliver right now. Please use the direct Email App button below.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
      provider: "formsubmit",
      message: "Transmission sent to Abdullah's inbox.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request payload. Please try again." },
      { status: 400 }
    );
  }
}
