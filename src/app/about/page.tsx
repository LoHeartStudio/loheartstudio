import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-lhs-ink pt-40 pb-24">
          <div className="u-container">
            <p className="font-mono text-white/30 text-[10px] uppercase tracking-[0.3em] mb-6">
              Who We Are
            </p>
            <h1 className="font-sans font-extrabold text-white text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-[-0.04em]">
              About
            </h1>
          </div>
        </section>

        {/* Story */}
        <section className="bg-[#FAFAF8] py-24">
          <div className="u-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
              <div>
                <h2 className="font-sans font-extrabold text-lhs-ink text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.02em] mb-8">
                  Lo-fiで温度のある
                  <br />
                  <span className="text-lhs-blue">Web</span>を作る。
                </h2>
                <div className="flex flex-col gap-6">
                  <p className="font-sans text-lhs-gray text-[0.9375rem] leading-[1.9]">
                    LoHeartStudioは、ひとりで運営するWeb制作スタジオです。
                    大きな組織では出せない「手ざわり」のあるものづくりを信条に、
                    デザインからコーディングまで一貫して手がけます。
                  </p>
                  <p className="font-sans text-lhs-gray text-[0.9375rem] leading-[1.9]">
                    古着やレコード、フィルム写真のような
                    「完璧じゃないけど愛着が湧くもの」が好きで、
                    そのLo-fiな感覚をWebデザインに落とし込んでいます。
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-10">
                {/* Skills */}
                <div>
                  <p className="font-mono text-lhs-muted text-[10px] uppercase tracking-[0.3em] mb-5">
                    Skills
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma", "Vercel", "Shopify", "WordPress"].map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[11px] text-lhs-gray border border-lhs-ink/8 rounded-full px-4 py-2"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Values */}
                <div>
                  <p className="font-mono text-lhs-muted text-[10px] uppercase tracking-[0.3em] mb-5">
                    Values
                  </p>
                  <div className="flex flex-col gap-4">
                    {[
                      { label: "Craft", desc: "ひとつずつ、手作業で仕上げる" },
                      { label: "Warmth", desc: "温度が伝わるデザイン" },
                      { label: "Honest", desc: "等身大で、嘘のないものづくり" },
                    ].map((v) => (
                      <div key={v.label} className="flex items-start gap-4">
                        <span className="font-sans font-bold text-lhs-ink text-sm mt-0.5 min-w-[64px]">
                          {v.label}
                        </span>
                        <span className="font-sans text-lhs-gray text-sm">
                          {v.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Background */}
                <div>
                  <p className="font-mono text-lhs-muted text-[10px] uppercase tracking-[0.3em] mb-5">
                    Background
                  </p>
                  <p className="font-sans text-lhs-gray text-sm leading-[1.8]">
                    古着屋勤務を経て、独学でWeb制作を習得。
                    実店舗の現場で培った「手で触れるものづくり」の感覚を、
                    デジタルの世界に持ち込んでいます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
