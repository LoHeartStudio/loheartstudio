import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const allWorks = [
  {
    title: "Vintage Archive & Price Database",
    client: "Cotton Archive",
    categories: ["Web Design", "Development"],
    image: "/images/cotton-archive-top.png",
    href: "/works/cotton-archive",
    year: "2026",
  },
  {
    title: "喫茶店LP — 一杯の静けさを",
    client: "喫茶 燈火",
    categories: ["Web Design"],
    image: "/images/akari-seat.jpg",
    href: "/works/kissaten-akari",
    year: "2026",
  },
  {
    title: "ミリタリー古着EC & ブランドサイト",
    client: "MOTH",
    categories: ["Web Design", "Development", "Branding"],
    image: "/images/moth-counter.jpg",
    href: "/works/moth",
    year: "2026",
  },
  {
    title: "フラワーショップ ブランドサイト",
    client: "BLOOM",
    categories: ["Web Design", "Development"],
    image: "/images/bloom-exterior.jpg",
    href: "/works/bloom",
    year: "2026",
  },
];

export default function WorksPage() {
  return (
    <div>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-lhs-ink pt-40 pb-24">
          <div className="u-container">
            <p className="font-mono text-white/30 text-[10px] uppercase tracking-[0.3em] mb-6">
              Selected Projects
            </p>
            <h1 className="font-sans font-extrabold text-white text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-[-0.04em]">
              Works
            </h1>
          </div>
        </section>

        {/* Works grid */}
        <section className="bg-[#FAFAF8] py-24">
          <div className="u-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {allWorks.map((work) => (
                <Link key={work.title} href={work.href} className="group block">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-[2rem] rounded-b-sm bg-[#1A1A1A] p-2">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-contain rounded-t-[1.75rem] transition-all duration-700 ease-out group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div className="pt-5 pb-10 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-sans font-bold text-lhs-ink text-[clamp(1.1rem,2vw,1.5rem)] leading-[1.25] mb-3 group-hover:text-lhs-blue transition-colors duration-300 tracking-[-0.01em]">
                        {work.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-lhs-muted text-[10px] uppercase tracking-[0.15em]">
                          {work.client}
                        </span>
                        <span className="font-mono text-lhs-muted/30 text-[10px]">
                          {work.year}
                        </span>
                        {work.categories.map((cat) => (
                          <span
                            key={cat}
                            className="font-mono text-[10px] uppercase tracking-[0.12em] text-lhs-muted border border-lhs-ink/8 rounded-full px-3 py-1"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 text-lhs-blue">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
