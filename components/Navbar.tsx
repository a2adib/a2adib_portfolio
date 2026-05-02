"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { personal } from "@/lib/data";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-primary/90 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNav("#hero"); }}
          className="font-display font-bold text-lg tracking-tight"
        >
          <span className="gradient-text">adib</span>
          <span className="text-text-muted font-mono text-sm">.dev</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="font-mono text-sm text-text-muted hover:text-accent-cyan transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={personal.cvUrl}
            download
            className="btn-outline px-4 py-2 text-sm font-mono"
          >
            Download CV
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-text-muted hover:text-accent-cyan transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-bg-secondary/95 backdrop-blur-md border-b border-white/5 px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="text-text-muted hover:text-accent-cyan font-mono text-sm w-full text-left py-1 transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href={personal.cvUrl}
                download
                className="btn-outline px-4 py-2 text-sm font-mono inline-block mt-2"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
