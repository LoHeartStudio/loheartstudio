import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const projectInfo = {
  title: "Cotton Archive",
  tagline: "Every garment documented.",
  url: "https://cotton-archive.com",
  year: "2025 — Present",
  role: ["Web Design", "Full-Stack Development", "Branding"],
  tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel", "Puppeteer"],
  features: ["Webスクレイピングによるデータ収集", "ユーザー投稿機能", "ログイン/認証", "レアリティスコア算出", "価格推移トラッキング", "多言語対応（EN/JA）"],
  stats: [
    { label: "Items", value: "2,180+" },
    { label: "Brands", value: "322" },
    { label: "Countries", value: "23" },
  ],
};

export default function CottonArchivePage() {
  return (
    <div>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-lhs-ink pt-40 pb-20">
          <div className="u-container">
            <Link
              href="/works"
              className="inline-flex items-center gap-2 font-mono text-white/30 text-[10px] uppercase tracking-[0.2em] hover:text-white/60 transition-colors mb-10"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              Back to Works
            </Link>
            <h1 className="font-sans font-extrabold text-white text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-[-0.04em] mb-6">
              {projectInfo.title}
            </h1>
            <p className="font-serif italic text-white/40 text-[clamp(1.25rem,3vw,2rem)] leading-[1.3]">
              {projectInfo.tagline}
            </p>
          </div>
        </section>

        {/* Project image — full width */}
        <section className="bg-lhs-ink pb-2">
          <div className="u-container">
            <div className="w-full overflow-hidden rounded-2xl bg-[#1A1A1A] p-2">
              <Image
                src="/images/cotton-archive-top.png"
                alt="Cotton Archive — トップページ"
                width={2879}
                height={1348}
                className="w-full h-auto rounded-xl"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* Project details */}
        <section className="bg-[#FAFAF8] py-24">
          <div className="u-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
              {/* Meta */}
              <div className="flex flex-col gap-8">
                <div>
                  <p className="font-mono text-lhs-muted text-[10px] uppercase tracking-[0.3em] mb-3">
                    Year
                  </p>
                  <p className="font-sans text-lhs-ink text-sm">
                    {projectInfo.year}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-lhs-muted text-[10px] uppercase tracking-[0.3em] mb-3">
                    Role
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projectInfo.role.map((r) => (
                      <span key={r} className="font-mono text-[11px] text-lhs-gray border border-lhs-ink/8 rounded-full px-3 py-1">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-mono text-lhs-muted text-[10px] uppercase tracking-[0.3em] mb-3">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projectInfo.tech.map((t) => (
                      <span key={t} className="font-mono text-[11px] text-lhs-gray border border-lhs-ink/8 rounded-full px-3 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-mono text-lhs-muted text-[10px] uppercase tracking-[0.3em] mb-3">
                    Features
                  </p>
                  <ul className="flex flex-col gap-2">
                    {projectInfo.features.map((f) => (
                      <li key={f} className="font-mono text-[11px] text-lhs-gray flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-lhs-blue" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-lhs-muted text-[10px] uppercase tracking-[0.3em] mb-3">
                    URL
                  </p>
                  <a
                    href={projectInfo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-lhs-blue text-sm hover:underline"
                  >
                    cotton-archive.com ↗
                  </a>
                </div>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <h2 className="font-sans font-extrabold text-lhs-ink text-[clamp(1.5rem,3vw,2rem)] leading-[1.3] tracking-[-0.02em] mb-8">
                  ヴィンテージ衣類の価値を、
                  <br />
                  データで可視化する。
                </h2>
                <div className="flex flex-col gap-6">
                  <p className="font-sans text-lhs-gray text-[0.9375rem] leading-[1.9]">
                    Cotton Archiveは、世界中のヴィンテージ衣類をアーカイブし、
                    レアリティスコアや価格推移を記録するデータベースサービスです。
                    コレクターやディーラーが「本物の価値」を判断するための
                    インテリジェンスプラットフォームとして設計しました。
                  </p>
                  <p className="font-sans text-lhs-gray text-[0.9375rem] leading-[1.9]">
                    技術面では、Puppeteerを使った主要オークションサイトからの
                    価格データスクレイピング、Supabase Authによるユーザー認証、
                    ユーザーが自分のコレクションを投稿・共有できるCGM機能を実装。
                    レアリティスコアの自動算出アルゴリズムも独自に設計しました。
                  </p>
                  <p className="font-sans text-lhs-gray text-[0.9375rem] leading-[1.9]">
                    デザインは、アーカイブとしての信頼感と、
                    ヴィンテージの持つ温かみを両立させることを目指しました。
                    太いセリフ体の見出し、モノクロベースの配色、
                    そしてカラフルなアクセントでデータに生命感を与えています。
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-24">
              {projectInfo.stats.map((stat) => (
                <div key={stat.label} className="text-center py-8 border border-lhs-ink/5 rounded-xl">
                  <p className="font-sans font-extrabold text-lhs-blue text-[clamp(2rem,4vw,3rem)] leading-[1] tracking-[-0.03em] mb-2">
                    {stat.value}
                  </p>
                  <p className="font-mono text-lhs-muted text-[10px] uppercase tracking-[0.2em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Process */}
            <div className="mb-24">
              <p className="font-mono text-lhs-muted text-[10px] uppercase tracking-[0.3em] mb-6">
                Process
              </p>
              <h3 className="font-sans font-extrabold text-lhs-ink text-[clamp(1.25rem,2.5vw,1.75rem)] leading-[1.3] tracking-[-0.02em] mb-10">
                課題から設計へ
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  {
                    step: "01",
                    title: "リサーチ",
                    desc: "ヴィンテージ市場のコレクター、ディーラー、古着屋オーナーへのヒアリング。価格判断に必要な情報を洗い出し。",
                  },
                  {
                    step: "02",
                    title: "設計 & デザイン",
                    desc: "データ密度の高いUIを、読みやすく美しくレイアウト。ブランドカラーによるカテゴリ識別、レアリティスコアの視覚表現。",
                  },
                  {
                    step: "03",
                    title: "開発 & ローンチ",
                    desc: "Next.js + Supabaseでフルスタック構築。SSGによる高速表示、リアルタイム検索、多言語対応（EN/JA）。",
                  },
                ].map((item) => (
                  <div key={item.step}>
                    <span className="font-mono text-lhs-blue text-[10px] uppercase tracking-[0.2em]">
                      {item.step}
                    </span>
                    <h4 className="font-sans font-bold text-lhs-ink text-lg mt-2 mb-3">
                      {item.title}
                    </h4>
                    <p className="font-sans text-lhs-gray text-sm leading-[1.8]">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* More images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
              <div className="overflow-hidden rounded-xl bg-[#1A1A1A] p-2">
                <Image
                  src="/images/cotton-archive-detail.png"
                  alt="Cotton Archive — アイテム詳細ページ"
                  width={2863}
                  height={1459}
                  className="w-full h-auto rounded-lg"
                  sizes="50vw"
                />
              </div>
              <div className="overflow-hidden rounded-xl bg-[#1A1A1A] p-2">
                <Image
                  src="/images/cotton-archive-submit.png"
                  alt="Cotton Archive — アイテム投稿フォーム"
                  width={2868}
                  height={1517}
                  className="w-full h-auto rounded-lg"
                  sizes="50vw"
                />
              </div>
            </div>

            {/* CTA */}
            <div className="text-center py-16 border-t border-lhs-ink/5">
              <p className="font-sans text-lhs-gray text-sm mb-6">
                このようなプロジェクトに興味がありますか？
              </p>
              <Link
                href="/contact"
                className="inline-block font-sans font-bold text-white bg-lhs-blue rounded-full px-10 py-4 text-sm hover:opacity-90 transition-opacity"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
