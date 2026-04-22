"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealOnScroll } from "./RevealOnScroll";

function ScrollRevealText({ children }: { children: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"],
  });

  const color = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgba(26, 26, 26, 0.15)", "rgba(26, 26, 26, 1)"]
  );

  return (
    <motion.p
      ref={ref}
      className="font-serif text-center text-[clamp(1.25rem,2.5vw,2rem)] leading-[1.7] max-w-[720px] mx-auto"
      style={{ color }}
    >
      {children}
    </motion.p>
  );
}

export function StorySection() {
  return (
    <section className="bg-[#FAFAF8] relative overflow-hidden">
      {/* Giant heading */}
      <div className="py-8">
        <RevealOnScroll>
          <h2 className="font-sans font-black text-lhs-ink text-[clamp(5rem,15vw,14rem)] leading-[0.85] tracking-[-0.05em] text-center px-4">
            温度のある<span className="text-lhs-blue">Web</span>
          </h2>
        </RevealOnScroll>
      </div>

      {/* Tagline */}
      <div className="u-container pt-16 pb-12">
        <RevealOnScroll>
          <p className="font-serif text-lhs-ink text-[clamp(1.5rem,3.5vw,2.75rem)] leading-[1.5] text-center max-w-[900px] mx-auto">
            ひとつずつ、ていねいに。
            <br />
            手ざわりのあるWebを作る、ソロスタジオ。
          </p>
        </RevealOnScroll>
      </div>

      {/* Description — scroll color reveal */}
      <div className="u-container pb-48">
        <ScrollRevealText>
          LoHeartStudioは、Lo-fiで温度のあるWebを作るソロスタジオです。パステルの色彩とフィルムのような粒子感で、あなたのブランドに「手ざわり」を加えます。すべての案件に、クラフトを。
        </ScrollRevealText>
      </div>
    </section>
  );
}
