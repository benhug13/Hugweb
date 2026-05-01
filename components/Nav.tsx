"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/70 border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="Nordweb Startseite"
        >
          <span className="relative inline-flex items-center justify-center h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 shadow-md shadow-indigo-500/20 transition-transform group-hover:scale-105">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M5 19V5l14 14V5" />
            </svg>
          </span>
          <span className="text-lg font-semibold tracking-tight">Nordweb</span>
        </Link>
        <div className="hidden md:flex items-center gap-7 text-sm">
          <a href="/#demos" className="hover:opacity-60 transition">
            Demos
          </a>
          <a href="/#ueber-mich" className="hover:opacity-60 transition">
            Über mich
          </a>
          <a href="/#prozess" className="hover:opacity-60 transition">
            Ablauf
          </a>
          <a href="/#preise" className="hover:opacity-60 transition">
            Preise
          </a>
          <a href="/#faq" className="hover:opacity-60 transition">
            FAQ
          </a>
        </div>
        <a
          href="/#kontakt"
          className="rounded-full bg-black text-white text-sm px-5 py-2 hover:bg-neutral-800 transition"
        >
          Kontakt
        </a>
      </nav>
    </header>
  );
}
