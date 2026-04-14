import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const projectInfo = {
  title: "喫茶 燈火",
  titleEn: "Kissaten Akari",
  tagline: "一杯の静けさを、下北沢から。",
  url: "#",
  year: "2026",
  role: ["Web Design", "Development"],
  tech: ["Next.js", "Tailwind CSS", "Vercel"],
  overview: "古民家を改装した自家焙煎の喫茶店。レトロな空間で淹れたてのハンドドリップコーヒーと自家製プリンを提供する、下北沢の隠れ家的存在。",
};

export default function KissatenAkariPage() {
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
            <p className="font-mono text-white/30 text-sm tracking-[0.1em] mb-6">
              {projectInfo.titleEn}
            </p>
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
                src="/images/akari-seat.jpg"
                alt="喫茶 燈火 — ソファ席"
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
              {/* Meta */}
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
                  <p className="font-sans text-lhs-ink text-sm">LP（1ページ完結）</p>
                </div>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <h2 className="font-sans font-extrabold text-lhs-ink text-[clamp(1.5rem,3vw,2rem)] leading-[1.3] tracking-[-0.02em] mb-8">
                  レトロな空間の温度を、
                  <br />
                  そのままWebに。
                </h2>
                <div className="flex flex-col gap-6">
                  <p className="font-sans text-lhs-gray text-[0.9375rem] leading-[1.9]">
                    {projectInfo.overview}
                    オーナーの「ネットで見つけて、ふらっと来てほしい」という想いに応え、
                    店の雰囲気がそのまま伝わるLP型のWebサイトを制作しました。
                  </p>
                  <p className="font-sans text-lhs-gray text-[0.9375rem] leading-[1.9]">
                    Bee Homeのようなフルスクリーンの写真表現と、
                    温かいアースカラーの配色で、訪れる前から店の空気感を体験できるデザインに。
                    メニュー、アクセス、Instagram連携をシンプルに配置し、
                    来店につながる導線を設計しました。
                  </p>
                </div>
              </div>
            </div>

            {/* Design approach */}
            <div className="mb-24">
              <p className="font-mono text-lhs-muted text-[10px] uppercase tracking-[0.3em] mb-6">Approach</p>
              <h3 className="font-sans font-extrabold text-lhs-ink text-[clamp(1.25rem,2.5vw,1.75rem)] leading-[1.3] tracking-[-0.02em] mb-10">
                デザインのこだわり
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  {
                    step: "01",
                    title: "写真ファースト",
                    desc: "店内の空気感を伝えるため、フィルムライクな写真をフルスクリーンで大胆に配置。テキストは最小限に。",
                  },
                  {
                    step: "02",
                    title: "アースカラー",
                    desc: "木の温もり、緑のソファ、真鍮の照明。実際の内装からカラーパレットを抽出し、サイト全体に統一感を。",
                  },
                  {
                    step: "03",
                    title: "来店への導線",
                    desc: "Google Map埋め込み、Instagram連携、営業時間を迷わず見つけられるシンプルな情報設計。",
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
                  src="/images/akari-interior.jpg"
                  alt="喫茶 燈火 — 店内全景"
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
