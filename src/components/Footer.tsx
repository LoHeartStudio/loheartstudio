import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-lhs-ink text-white">
      <div className="u-container py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-20">
          {/* Logo + tagline */}
          <div className="md:col-span-1">
            <Image
              src="/images/logo.png"
              alt="LoHeartStudio"
              width={140}
              height={44}
              className="h-[40px] w-auto brightness-0 invert mb-6"
            />
            <p className="font-sans text-white/40 text-sm leading-[1.7] max-w-[280px]">
              Lo-fiで温度のあるWebを作る、ソロスタジオ。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-white/30 text-[10px] uppercase tracking-[0.3em] mb-6">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {["Works", "Services", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="font-sans text-white/60 text-sm hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-white/30 text-[10px] uppercase tracking-[0.3em] mb-6">
              Get in Touch
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@loheartstudio.com"
                className="font-sans text-white/60 text-sm hover:text-white transition-colors"
              >
                info@loheartstudio.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-white/25 text-[10px] uppercase tracking-[0.15em]">
            © 2026 LoHeartStudio. All rights reserved.
          </p>
          <p className="font-mono text-white/25 text-[10px] uppercase tracking-[0.15em]">
            Crafted with warmth
          </p>
        </div>
      </div>
    </footer>
  );
}
