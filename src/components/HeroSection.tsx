"use client";

import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-lhs-ink overflow-hidden">
      {/* Black frame with photo inside — HWC style */}
      <div className="absolute inset-0 flex items-center justify-center p-6 md:p-10">
        <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/10">
          <Image
            src="/images/hero-3.jpg"
            alt="Lo-fi craft for the web"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      </div>

      {/* Hero text */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 md:pb-20 px-6 md:px-12 z-10">
        <h1 className="text-center">
          <span className="block font-sans font-extrabold text-white text-[clamp(3rem,10vw,8.5rem)] leading-[0.92] tracking-[-0.04em]">
            Lo-fi craft
          </span>
          <span className="block font-serif italic text-white/60 text-[clamp(2.5rem,8vw,7rem)] leading-[0.92] tracking-[-0.02em]">
            for the web.
          </span>
        </h1>
      </div>
    </section>
  );
}
