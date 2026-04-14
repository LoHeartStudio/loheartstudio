import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const services = [
  {
    title: "Web Design",
    description: "ブランドの世界観を反映した、温度のあるWebデザイン。ワイヤーフレームからビジュアルデザインまで一貫して制作します。",
    includes: ["ワイヤーフレーム設計", "UIデザイン", "レスポンシブ対応", "プロトタイプ"],
  },
  {
    title: "Development",
    description: "Next.js / React ベースのモダンなフロントエンド開発。高速で、SEOに強く、保守しやすいコードを書きます。",
    includes: ["Next.js / React", "CMS連携", "フォーム実装", "アニメーション"],
  },
  {
    title: "Branding",
    description: "ロゴ、カラーパレット、タイポグラフィ。ブランドのトーンを定義し、Webと一貫した世界観を構築します。",
    includes: ["ロゴデザイン", "カラー&タイポ設計", "ブランドガイドライン", "名刺・SNS素材"],
  },
];

const plans = [
  {
    name: "Opening Price",
    badge: "先着3〜5社限定",
    price: "¥78,000〜",
    priceSub: "税別",
    description: "実績パートナー募集中。一緒にポートフォリオを育てませんか。",
    features: ["1〜3ページ構成", "スマホ対応", "お問い合わせフォーム", "Google Map / SNSリンク", "基本SEO", "納期：2〜3週間"],
    featured: true,
  },
  {
    name: "Standard",
    price: "¥350,000〜",
    priceSub: "税別",
    description: "コーポレートサイトやポートフォリオに。",
    features: ["4〜8ページ", "CMS連携", "SEO基本設定", "アニメーション", "納期：約4週間"],
  },
  {
    name: "Premium",
    price: "¥600,000〜",
    priceSub: "税別",
    description: "ECサイトや複雑な要件に。",
    features: ["ページ数制限なし", "EC機能", "カスタム開発", "ブランディング込み", "納期：要相談"],
  },
];

export default function ServicesPage() {
  return (
    <div>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-lhs-ink pt-40 pb-24">
          <div className="u-container">
            <p className="font-mono text-white/30 text-[10px] uppercase tracking-[0.3em] mb-6">
              What We Do
            </p>
            <h1 className="font-sans font-extrabold text-white text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-[-0.04em]">
              Services
            </h1>
          </div>
        </section>

        {/* Services list */}
        <section className="bg-[#FAFAF8] py-24">
          <div className="u-container">
            <div className="flex flex-col divide-y divide-lhs-ink/8">
              {services.map((service, i) => (
                <div key={service.title} className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 first:pt-0">
                  <div>
                    <span className="font-mono text-lhs-muted text-[10px] uppercase tracking-[0.2em]">
                      0{i + 1}
                    </span>
                    <h2 className="font-sans font-extrabold text-lhs-ink text-[clamp(1.75rem,3vw,2.5rem)] leading-[1] tracking-[-0.03em] mt-3">
                      {service.title}
                    </h2>
                  </div>
                  <div>
                    <p className="font-sans text-lhs-gray text-[0.9375rem] leading-[1.8]">
                      {service.description}
                    </p>
                  </div>
                  <div>
                    <ul className="flex flex-col gap-2">
                      {service.includes.map((item) => (
                        <li key={item} className="font-mono text-lhs-muted text-[11px] uppercase tracking-[0.1em] flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-lhs-blue" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-[#FAFAF8] pb-32">
          <div className="u-container">
            <div className="mb-16">
              <p className="font-mono text-lhs-muted text-[10px] uppercase tracking-[0.3em] mb-4">
                Pricing
              </p>
              <h2 className="font-sans font-extrabold text-lhs-ink text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-[-0.03em]">
                料金プラン
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-8 flex flex-col relative ${
                    plan.featured
                      ? "bg-lhs-ink text-white ring-2 ring-lhs-blue"
                      : "bg-lhs-light text-lhs-ink"
                  }`}
                >
                  {plan.badge && (
                    <span className="absolute -top-3 left-8 font-sans font-bold text-[11px] bg-lhs-blue text-white px-4 py-1.5 rounded-full">
                      {plan.badge}
                    </span>
                  )}
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-50 mb-2 mt-1">
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-2 mb-3">
                    <p className="font-sans font-extrabold text-[2rem] leading-[1] tracking-[-0.03em]">
                      {plan.price}
                    </p>
                    {plan.priceSub && (
                      <span className={`text-xs ${plan.featured ? "text-white/40" : "text-lhs-muted"}`}>
                        {plan.priceSub}
                      </span>
                    )}
                  </div>
                  <p className={`text-sm mb-8 ${plan.featured ? "text-white/50" : "text-lhs-gray"}`}>
                    {plan.description}
                  </p>
                  <ul className="flex flex-col gap-3 mt-auto">
                    {plan.features.map((f) => (
                      <li key={f} className={`font-sans text-sm flex items-center gap-2 ${plan.featured ? "text-white/70" : "text-lhs-gray"}`}>
                        <span className="w-1 h-1 rounded-full bg-lhs-blue" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="font-sans text-lhs-muted text-sm">
                ※ 上記は目安です。要件に応じてお見積りいたします。
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
