import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  if (!data?.country || !data?.city || !data?.projectDetails)
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });

  const webhook = process.env.GMLINKS_CREW_WEBHOOK_URL;
  if (webhook) {
    const r = await fetch(webhook, { method:"POST", headers:{ "Content-Type":"application/json" }, body:JSON.stringify(data) });
    if (!r.ok) return NextResponse.json({ error:"Webhook failed" }, { status:502 });
  } else {
    console.log("GMLinks crew request:", data);
  }
  return NextResponse.json({ ok:true });
}
