import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, email, company, projectType, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "名前、メールアドレス、メッセージは必須です" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "LoHeartStudio <noreply@loheartstudio.com>",
      to: "info@loheartstudio.com",
      replyTo: email,
      subject: `【お問い合わせ】${name}様 — ${projectType || "未選択"}`,
      html: `
        <h2>お問い合わせがありました</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#999;width:120px;">お名前</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${name}</td></tr>
          <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#999;">メール</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${email}</td></tr>
          ${company ? `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#999;">会社名</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${company}</td></tr>` : ""}
          ${projectType ? `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#999;">案件種類</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${projectType}</td></tr>` : ""}
          ${budget ? `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#999;">予算</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${budget}</td></tr>` : ""}
        </table>
        <h3 style="margin-top:24px;">メッセージ</h3>
        <p style="white-space:pre-wrap;line-height:1.8;">${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "送信に失敗しました。時間をおいてお試しください。" },
      { status: 500 }
    );
  }
}
