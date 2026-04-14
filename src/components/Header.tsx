"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon, CloseIcon } from "./icons";

const navLinks = [
  { label: "Works", href: "/works" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[999]">
        <nav className="flex items-center justify-between px-5 md:px-8 py-5 md:py-6">
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="LoHeartStudio"
                width={160}
                height={50}
                className="h-[36px] md:h-[50px] w-auto brightness-0 invert"
                priority
              />
            </Link>
          </div>
          <div />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-[1000] w-10 h-10 md:w-12 md:h-12 rounded-full bg-lhs-blue flex items-center justify-center text-white hover:scale-105 transition-transform cursor-pointer"
            aria-label="Menu"
          >
            {menuOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[998] bg-lhs-ink flex items-center justify-center">
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-sans font-bold text-5xl md:text-7xl text-white hover:text-lhs-blue transition-colors tracking-[-0.03em]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
