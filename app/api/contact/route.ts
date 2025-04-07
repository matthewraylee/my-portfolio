import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Enhanced email validation
function validateEmail(email: string): boolean {
  // RFC 2822 Standard regex for email validation
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // Additional checks
  return (
    emailRegex.test(email) &&
    email.length <= 254 &&
    email.split("@")[0].length <= 64 &&
    // Ensure the domain has at least one dot and valid characters
    /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.split("@")[1])
  );
}

// Basic rate limiting
const submissions: Record<string, number[]> = {};
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_SUBMISSIONS = 3; // Max 3 submissions per window

export async function POST(request: Request) {
  try {
    const { recaptchaToken, name, email, subject, message } =
      await request.json();

    // Verify reCAPTCHA
    const verifyResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const verifyResult = await verifyResponse.json();

    // Log detailed verification results
    console.log("reCAPTCHA Verification:", {
      success: verifyResult.success,
      score: verifyResult.score,
      action: verifyResult.action,
      hostname: verifyResult.hostname,
    });

    // More lenient bot detection
    if (
      !verifyResult.success ||
      (verifyResult.score && verifyResult.score < 0.3)
    ) {
      return NextResponse.json(
        { error: "Bot detection failed", details: verifyResult },
        { status: 403 }
      );
    }

    // Get client IP (works with Vercel and most hosting platforms)
    const clientIp = request.headers.get("x-forwarded-for") || "unknown";

    // Comprehensive validation with detailed logging
    console.log("Received data:", { name, email, subject, message });

    const errors: string[] = [];

    // Validate name
    if (!name || name.trim().length < 2) {
      errors.push("Name must be at least 2 characters long");
      console.log("Name validation failed:", name);
    }

    // Validate email with detailed checks
    if (!email || !validateEmail(email)) {
      errors.push("Please provide a valid email address");
      console.log("Email validation failed:", email);
      console.log("Email validation details:", {
        isEmailProvided: !!email,
        emailRegexTest: email ? validateEmail(email) : "No email",
      });
    }

    // Validate subject
    if (!subject || subject.trim().length < 3) {
      errors.push("Subject must be at least 3 characters long");
      console.log("Subject validation failed:", subject);
    }

    // Validate message
    if (!message || message.trim().length < 10) {
      errors.push("Message must be at least 10 characters long");
      console.log("Message validation failed:", message);
    }

    // Rate limiting
    const now = Date.now();
    const previousSubmissions = submissions[clientIp] || [];
    const recentSubmissions = previousSubmissions.filter(
      (timestamp) => now - timestamp < RATE_LIMIT_WINDOW
    );

    if (recentSubmissions.length >= MAX_SUBMISSIONS) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 } // Too Many Requests
      );
    }

    // Return validation errors if any
    if (errors.length > 0) {
      console.log("Validation errors:", errors);
      return NextResponse.json({ errors }, { status: 400 });
    }

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "matthewraylee.work@gmail.com",
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
          <hr>
          <small>IP: ${clientIp} | Sent via portfolio contact form</small>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Update rate limiting
    submissions[clientIp] = [...recentSubmissions, now];

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
