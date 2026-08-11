"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // The overlay covers the page; keep the page behind it from scrolling.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-5 border-b border-[rgba(20,20,15,.07)] bg-[rgba(250,249,247,.78)] px-header-x py-[18px] backdrop-blur-[10px]">
        <a href="#top" className="font-mono text-mono-sm tracking-[.04em]">
          a2adib<span className="text-accent">.</span>dev
        </a>

        <nav className="hidden items-center gap-nav font-mono text-mono-2xs uppercase tracking-[.12em] text-ink-mute nav:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              <span className="text-ink-nav">{link.num}</span> {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Below the breakpoint the overlay carries this CTA, so the two
              controls never compete for the same narrow header. */}
          <a
            href="#contact"
            className="hidden rounded-full border border-ink px-4 py-[9px] font-mono text-mono-2xs uppercase tracking-[.1em] nav:inline-block"
          >
            Start a project →
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="rounded-full border border-ink px-4 py-[9px] font-mono text-mono-2xs uppercase tracking-[.1em] nav:hidden"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {/* Full-screen overlay — the mobile counterpart of the centre nav. */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 flex flex-col justify-center gap-8 bg-paper px-side pt-20 nav:hidden"
        >
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-[clamp(22px,6vw,32px)] uppercase tracking-[.06em]"
              >
                <span className="text-ink-nav">{link.num}</span> {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="self-start rounded-full border border-ink px-5 py-3 font-mono text-mono-xs uppercase tracking-[.1em]"
          >
            Start a project →
          </a>
        </div>
      )}
    </>
  );
}
