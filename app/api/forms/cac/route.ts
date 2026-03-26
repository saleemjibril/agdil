import { NextResponse } from "next/server";
import { cacFormSchema } from "@/lib/validators";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }
  const parsed = cacFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed", issues: parsed.error.flatten() },
      { status: 422 },
    );
  }
  // Hook: send email (Resend), CRM, or store in DB
  console.info("[cac-registration]", parsed.data);
  return NextResponse.json({ ok: true, message: "Submission received" });
}
