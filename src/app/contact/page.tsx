"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const projectTypes = ["新規サイト制作", "リニューアル", "LP制作", "ブランディング", "その他"];
const budgets = ["〜20万円", "20〜50万円", "50〜100万円", "100万円〜", "未定"];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", company: "", projectType: "", budget: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div>
        <Header />
        <main>
          <section className="bg-lhs-ink pt-40 pb-24">
            <div className="u-container">
              <p className="font-mono text-white/30 text-[10px] uppercase tracking-[0.3em] mb-6">
                Thank You
              </p>
              <h1 className="font-sans font-extrabold text-white text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-[-0.04em]">
                送信完了
              </h1>
            </div>
          </section>
          <section className="bg-[#FAFAF8] py-24">
            <div className="u-container max-w-[720px] text-center">
              <p className="font-sans text-lhs-ink text-lg mb-4">
                お問い合わせありがとうございます。
              </p>
              <p className="font-sans text-lhs-gray text-sm">
                2営業日以内にご返信いたします。
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section className="bg-lhs-ink pt-40 pb-24">
          <div className="u-container">
            <p className="font-mono text-white/30 text-[10px] uppercase tracking-[0.3em] mb-6">
              Let&apos;s Talk
            </p>
            <h1 className="font-sans font-extrabold text-white text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-[-0.04em]">
              Contact
            </h1>
          </div>
        </section>

        <section className="bg-[#FAFAF8] py-24">
          <div className="u-container max-w-[720px]">
            <div className="mb-16">
              <p className="font-sans text-lhs-gray text-[0.9375rem] leading-[1.9]">
                お仕事のご相談、お見積りのご依頼など、
                お気軽にお問い合わせください。
                通常2営業日以内にご返信いたします。
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-lhs-muted text-[10px] uppercase tracking-[0.2em]">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-transparent border-b border-lhs-ink/15 py-3 font-sans text-lhs-ink text-sm outline-none focus:border-lhs-blue transition-colors placeholder:text-lhs-muted/50"
                    placeholder="お名前"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-lhs-muted text-[10px] uppercase tracking-[0.2em]">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-transparent border-b border-lhs-ink/15 py-3 font-sans text-lhs-ink text-sm outline-none focus:border-lhs-blue transition-colors placeholder:text-lhs-muted/50"
                    placeholder="mail@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-lhs-muted text-[10px] uppercase tracking-[0.2em]">
                  Company
                </label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="bg-transparent border-b border-lhs-ink/15 py-3 font-sans text-lhs-ink text-sm outline-none focus:border-lhs-blue transition-colors placeholder:text-lhs-muted/50"
                  placeholder="会社名（任意）"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-lhs-muted text-[10px] uppercase tracking-[0.2em]">
                  Project Type
                </label>
                <div className="flex flex-wrap gap-2 pt-2">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setForm({ ...form, projectType: type })}
                      className={`font-sans text-sm rounded-full px-5 py-2.5 transition-colors cursor-pointer ${
                        form.projectType === type
                          ? "bg-lhs-blue text-white border border-lhs-blue"
                          : "text-lhs-gray border border-lhs-ink/10 hover:border-lhs-blue hover:text-lhs-blue"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-lhs-muted text-[10px] uppercase tracking-[0.2em]">
                  Budget
                </label>
                <div className="flex flex-wrap gap-2 pt-2">
                  {budgets.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setForm({ ...form, budget: b })}
                      className={`font-sans text-sm rounded-full px-5 py-2.5 transition-colors cursor-pointer ${
                        form.budget === b
                          ? "bg-lhs-blue text-white border border-lhs-blue"
                          : "text-lhs-gray border border-lhs-ink/10 hover:border-lhs-blue hover:text-lhs-blue"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-lhs-muted text-[10px] uppercase tracking-[0.2em]">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-transparent border-b border-lhs-ink/15 py-3 font-sans text-lhs-ink text-sm outline-none focus:border-lhs-blue transition-colors placeholder:text-lhs-muted/50 resize-none"
                  placeholder="プロジェクトの概要をお聞かせください"
                />
              </div>

              {status === "error" && (
                <p className="font-sans text-red-500 text-sm">
                  送信に失敗しました。時間をおいてお試しください。
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="self-start font-sans font-bold text-white bg-lhs-blue rounded-full px-10 py-4 text-sm hover:opacity-90 transition-opacity mt-4 cursor-pointer disabled:opacity-50"
              >
                {status === "sending" ? "送信中..." : "送信する"}
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
