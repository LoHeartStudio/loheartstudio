"use client";

import { useEffect, useRef } from "react";
import { RevealOnScroll } from "./RevealOnScroll";

function ScrollRevealText({ children }: { children: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;
        el.style.color = ratio > 0.5
          ? `rgba(26, 26, 26, ${Math.min(1, (ratio - 0.3) * 2)})`
          : "rgba(26, 26, 26, 0.2)";
      },
      { threshold: Array.from({ length: 20 }, (_, i) => i / 20) }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className="transition-colors duration-500"
      style={{ color: "rgba(26, 26, 26, 0.2)" }}
    >
      {children}
    </span>
  );
}

export function StorySection() {
  return (
    <section className="bg-[#FAFAF8] relative overflow-hidden">
      {/* Giant heading — fills width but doesn't overflow */}
      <div className="py-8">
        <RevealOnScroll>
          <h2 className="font-sans font-black text-lhs-ink text-[clamp(5rem,15vw,14rem)] leading-[0.85] tracking-[-0.05em] text-center px-4">
            温度のある<span className="text-lhs-blue">Web</span>
          </h2>
        </RevealOnScroll>
      </div>

      {/* Tagline — serif, centered */}
      <div className="u-container pt-16 pb-12">
        <RevealOnScroll>
          <p className="font-serif text-lhs-ink text-[clamp(1.5rem,3.5vw,2.75rem)] leading-[1.5] text-center max-w-[900px] mx-auto">
            ひとつずつ、ていねいに。
            <br />
            手ざわりのあるWebを作る、ソロスタジオ。
          </p>
        </RevealOnScroll>
      </div>

      {/* Description — starts gray, turns black on scroll */}
      <div className="u-container pb-48">
        <p className="font-serif text-center text-[clamp(1.25rem,2.5vw,2rem)] leading-[1.7] max-w-[720px] mx-auto">
          <ScrollRevealText>
            LoHeartStudioは、Lo-fiで温度のあるWebを作るソロスタジオです。パステルの色彩とフィルムのような粒子感で、あなたのブランドに「手ざわり」を加えます。すべての案件に、クラフトを。
          </ScrollRevealText>
        </p>
      </div>
    </section>
  );
}
