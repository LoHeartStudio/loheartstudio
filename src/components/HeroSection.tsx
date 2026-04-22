"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-lhs-ink overflow-hidden">
      {/* Black frame with photo inside */}
      <div className="absolute inset-0 flex items-center justify-center p-6 md:p-10">
        <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/10">
          {/* Ken Burns — slow zoom over 20s */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.0 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: 20, ease: "linear" }}
          >
            <Image
              src="/images/hero-3.jpg"
              alt="Lo-fi craft for the web"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      </div>

      {/* Hero text — fade in from below */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 md:pb-20 px-6 md:px-12 z-10">
        <motion.h1
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="block font-sans font-extrabold text-white text-[clamp(3rem,10vw,8.5rem)] leading-[0.92] tracking-[-0.04em]">
            Lo-fi craft
          </span>
          <motion.span
            className="block font-serif italic text-white/60 text-[clamp(2.5rem,8vw,7rem)] leading-[0.92] tracking-[-0.02em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          >
            for the web.
          </motion.span>
        </motion.h1>
      </div>
    </section>
  );
}
