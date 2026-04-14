"use client";

import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "./RevealOnScroll";

interface WorkItem {
  title: string;
  client: string;
  categories: string[];
  image: string;
  href: string;
}

const works: WorkItem[] = [
  {
    title: "Vintage Archive & Price Database",
    client: "Cotton Archive",
    categories: ["Web Design", "Development"],
    image: "/images/cotton-archive-top.png",
    href: "/works/cotton-archive",
  },
  {
    title: "喫茶店LP — 一杯の静けさを",
    client: "喫茶 燈火",
    categories: ["Web Design"],
    image: "/images/akari-seat.jpg",
    href: "/works/kissaten-akari",
  },
  {
    title: "ミリタリー古着EC & ブランドサイト",
    client: "MOTH",
    categories: ["Web Design", "Development", "Branding"],
    image: "/images/moth-counter.jpg",
    href: "/works/moth",
  },
  {
    title: "フラワーショップ ブランドサイト",
    client: "BLOOM",
    categories: ["Web Design", "Development"],
    image: "/images/bloom-exterior.jpg",
    href: "/works/bloom",
  },
];

function WorkCard({ work, index }: { work: WorkItem; index: number }) {
  return (
    <RevealOnScroll delay={index % 2 === 0 ? 0 : 0.1}>
      <Link href={work.href} className="group block">
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
          <div className="mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0 text-lhs-blue">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </Link>
    </RevealOnScroll>
  );
}

export function WorksSection() {
  return (
    <section className="bg-[#FAFAF8] py-32">
      <div className="u-container mb-20">
        <RevealOnScroll>
          <div className="flex items-end justify-between">
            <div>
              <p className="font-mono text-lhs-muted text-[10px] uppercase tracking-[0.3em] mb-4">
                Selected Projects
              </p>
              <h2 className="font-sans font-extrabold text-lhs-ink text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.92] tracking-[-0.04em]">
                Featured Work
              </h2>
            </div>
            <Link
              href="/works"
              className="hidden md:flex items-center gap-2 font-mono text-lhs-muted text-[10px] uppercase tracking-[0.15em] hover:text-lhs-blue transition-colors pb-2"
            >
              View All
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Link>
          </div>
        </RevealOnScroll>
      </div>

      <div className="u-container grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {works.map((work, i) => (
          <WorkCard key={work.title} work={work} index={i} />
        ))}
      </div>
    </section>
  );
}
