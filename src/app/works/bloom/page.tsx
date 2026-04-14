import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "BLOOM",
  description: "中目黒のフラワーショップ「BLOOM」のブランドサイト＆サブスク申し込みページの制作事例。Stripe連携によるサブスク決済を実装。",
};

const projectInfo = {
  title: "BLOOM",
  tagline: "花のある暮らしを、もっとカジュアルに。",
  year: "2026",
  role: ["Web Design", "Development"],
  tech: ["Next.js", "Tailwind CSS", "Stripe", "Vercel"],
};

export default function BloomPage() {
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
            <div className="flex items-center gap-4 mb-4">
              <h1 className="font-sans font-extrabold text-white text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-[-0.04em]">
                {projectInfo.title}
              </h1>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-lhs-blue border border-lhs-blue/30 rounded-full px-3 py-1 mt-3">
                Concept Work
              </span>
            </div>
            <p className="font-serif italic text-white/40 text-[clamp(1.25rem,3vw,2rem)] leading-[1.3]">
              {projectInfo.tagline}
            </p>
          </div>
        </section>

        {/* Main image */}
        <section className="bg-lhs-ink pb-2">
          <div className="u-container">
            <div className="w-full overflow-hidden rounded-2xl bg-[#1A1A1A] p-2">
              <Image
                src="/images/bloom-exterior.jpg"
                alt="BLOOM — 店舗外観"
                width={1600}
                height={900}
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
              <div className="flex flex-col gap-8">
                <div>
                  <p className="font-mono text-lhs-muted text-[10px] uppercase tracking-[0.3em] mb-3">Year</p>
                  <p className="font-sans text-lhs-ink text-sm">{projectInfo.year}</p>
                </div>
                <div>
                  <p className="font-mono text-lhs-muted text-[10px] uppercase tracking-[0.3em] mb-3">Role</p>
                  <div className="flex flex-wrap gap-2">
                    {projectInfo.role.map((r) => (
                      <span key={r} className="font-mono text-[11px] text-lhs-gray border border-lhs-ink/8 rounded-full px-3 py-1">{r}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-mono text-lhs-muted text-[10px] uppercase tracking-[0.3em] mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {projectInfo.tech.map((t) => (
                      <span key={t} className="font-mono text-[11px] text-lhs-gray border border-lhs-ink/8 rounded-full px-3 py-1">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-mono text-lhs-muted text-[10px] uppercase tracking-[0.3em] mb-3">Type</p>
                  <p className="font-sans text-lhs-ink text-sm">ブランドサイト + サブスク申し込み</p>
                </div>
              </div>

              <div className="md:col-span-2">
                <h2 className="font-sans font-extrabold text-lhs-ink text-[clamp(1.5rem,3vw,2rem)] leading-[1.3] tracking-[-0.02em] mb-8">
                  ポップで現代的な花屋を、
                  <br />
                  Webでも体験する。
                </h2>
                <div className="flex flex-col gap-6">
                  <p className="font-sans text-lhs-gray text-[0.9375rem] leading-[1.9]">
                    BLOOMは中目黒に店舗を構える現代的なフラワーショップ。
                    生花とドライフラワーを扱い、月額制の花のサブスクリプションサービスも展開。
                    ピンクを基調とした店舗の世界観をそのままWebに落とし込みました。
                  </p>
                  <p className="font-sans text-lhs-gray text-[0.9375rem] leading-[1.9]">
                    Stripe連携によるサブスク決済、季節の花束のギャラリー、
                    Instagram埋め込みによるリアルタイムの店舗情報発信。
                    「見てるだけで気分が上がる」サイトを目指しました。
                  </p>
                </div>
              </div>
            </div>

            {/* Approach */}
            <div className="mb-24">
              <p className="font-mono text-lhs-muted text-[10px] uppercase tracking-[0.3em] mb-6">Approach</p>
              <h3 className="font-sans font-extrabold text-lhs-ink text-[clamp(1.25rem,2.5vw,1.75rem)] leading-[1.3] tracking-[-0.02em] mb-10">
                デザインのこだわり
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  {
                    step: "01",
                    title: "カラフル & ポップ",
                    desc: "ピンク×ホワイトを軸に、花の色がそのままアクセントになるデザイン。写真が主役。",
                  },
                  {
                    step: "02",
                    title: "サブスク体験",
                    desc: "3ステップで完了する申し込みフロー。Stripe決済でスムーズに。プラン選択UIにこだわり。",
                  },
                  {
                    step: "03",
                    title: "SNS連携",
                    desc: "Instagramフィードの自動埋め込みで、常にフレッシュなビジュアルを。更新の手間ゼロ。",
                  },
                ].map((item) => (
                  <div key={item.step}>
                    <span className="font-mono text-lhs-blue text-[10px] uppercase tracking-[0.2em]">{item.step}</span>
                    <h4 className="font-sans font-bold text-lhs-ink text-lg mt-2 mb-3">{item.title}</h4>
                    <p className="font-sans text-lhs-gray text-sm leading-[1.8]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Second image */}
            <div className="mb-24">
              <div className="w-full overflow-hidden rounded-2xl bg-[#1A1A1A] p-2">
                <Image
                  src="/images/bloom-dryflower.jpg"
                  alt="BLOOM — ドライフラワー"
                  width={1200}
                  height={675}
                  className="w-full h-auto rounded-xl"
                  sizes="100vw"
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
