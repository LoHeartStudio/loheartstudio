"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const links = [
  { label: "Works", href: "/works" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function BottomHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={sectionRef} className="relative bg-lhs-ink">
      <div className="relative w-full min-h-screen overflow-hidden p-6 md:p-10 pb-0 md:pb-0">
        <div className="relative w-full h-full min-h-[calc(100vh-3rem)] md:min-h-[calc(100vh-5rem)] rounded-t-lg overflow-hidden border border-b-0 border-white/10">
          {/* Parallax image */}
          <motion.div className="absolute inset-[-10%]" style={{ y: imageY }}>
            <Image
              src="/images/hero-1.jpg"
              alt="LoHeartStudio"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/30" />

          {/* Navigation links — staggered fade in */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 md:gap-5 z-10">
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Link
                  href={link.href}
                  className="font-sans font-extrabold text-white text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-[-0.03em] hover:text-white/50 transition-colors duration-500"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Footer overlay */}
          <div className="absolute bottom-0 left-0 right-0 z-20">
            <div className="px-8 md:px-12 py-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="font-mono text-white/30 text-[10px] uppercase tracking-[0.15em]">
                  © 2026 LoHeartStudio
                </p>
                <a
                  href="mailto:info@loheartstudio.com"
                  className="font-mono text-white/30 text-[10px] uppercase tracking-[0.15em] hover:text-white/60 transition-colors"
                >
                  info@loheartstudio.com
                </a>
                <p className="font-mono text-white/20 text-[10px] uppercase tracking-[0.15em]">
                  Crafted with warmth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
