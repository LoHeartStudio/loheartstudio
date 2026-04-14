import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <div>
      <Header />
      <main>
        {/* Hero */}
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

        {/* Contact form */}
        <section className="bg-[#FAFAF8] py-24">
          <div className="u-container max-w-[720px]">
            <div className="mb-16">
              <p className="font-sans text-lhs-gray text-[0.9375rem] leading-[1.9]">
                お仕事のご相談、お見積りのご依頼など、
                お気軽にお問い合わせください。
                通常2営業日以内にご返信いたします。
              </p>
            </div>

            <form className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-lhs-muted text-[10px] uppercase tracking-[0.2em]">
                    Name
                  </label>
                  <input
                    type="text"
                    className="bg-transparent border-b border-lhs-ink/15 py-3 font-sans text-lhs-ink text-sm outline-none focus:border-lhs-blue transition-colors placeholder:text-lhs-muted/50"
                    placeholder="お名前"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-lhs-muted text-[10px] uppercase tracking-[0.2em]">
                    Email
                  </label>
                  <input
                    type="email"
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
                  className="bg-transparent border-b border-lhs-ink/15 py-3 font-sans text-lhs-ink text-sm outline-none focus:border-lhs-blue transition-colors placeholder:text-lhs-muted/50"
                  placeholder="会社名（任意）"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-lhs-muted text-[10px] uppercase tracking-[0.2em]">
                  Project Type
                </label>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["新規サイト制作", "リニューアル", "LP制作", "ブランディング", "その他"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      className="font-sans text-sm text-lhs-gray border border-lhs-ink/10 rounded-full px-5 py-2.5 hover:border-lhs-blue hover:text-lhs-blue transition-colors cursor-pointer"
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
                  {["〜20万円", "20〜50万円", "50〜100万円", "100万円〜", "未定"].map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      className="font-sans text-sm text-lhs-gray border border-lhs-ink/10 rounded-full px-5 py-2.5 hover:border-lhs-blue hover:text-lhs-blue transition-colors cursor-pointer"
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-lhs-muted text-[10px] uppercase tracking-[0.2em]">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="bg-transparent border-b border-lhs-ink/15 py-3 font-sans text-lhs-ink text-sm outline-none focus:border-lhs-blue transition-colors placeholder:text-lhs-muted/50 resize-none"
                  placeholder="プロジェクトの概要をお聞かせください"
                />
              </div>

              <button
                type="submit"
                className="self-start font-sans font-bold text-white bg-lhs-blue rounded-full px-10 py-4 text-sm hover:opacity-90 transition-opacity mt-4 cursor-pointer"
              >
                送信する
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
