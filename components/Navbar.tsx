"use client";

import { useEffect, useState } from "react";
import { Crosshair, Menu, Star, Volume2, VolumeX, X } from "lucide-react";
import { DISTRICTS, useGame } from "@/components/game/GameContext";

const hudNav = [
  { num: "01", label: "Systems", href: "#act1", id: "act1" },
  { num: "02", label: "Heists", href: "#act2", id: "act2" },
  { num: "03", label: "Rap Sheet", href: "#act3", id: "act3" },
  { num: "04", label: "Creed", href: "#act4", id: "act4" },
  { num: "05", label: "Safehouse", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const {
    wantedLevel,
    respect,
    activeDistrict,
    sfxEnabled,
    setWheelOpen,
    toggleSfx,
    addHeat,
    clearHeat,
    playClick,
  } = useGame();

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  const activeZone =
    DISTRICTS.find((d) => d.id === activeDistrict)?.zone ?? "VICE BEACH HQ";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-vice-bg/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 sm:px-8">
          {/* Emblem */}
          <a
            href="#top"
            onClick={() => playClick()}
            className="group flex items-center gap-3"
          >
            <div className="clip-cut-sm flex h-9 w-9 items-center justify-center bg-vice-sunset font-display text-xl tracking-wider text-vice-bg shadow-neon-pink transition-transform group-hover:scale-105">
              VI
            </div>
            <div className="leading-none">
              <span className="block font-display text-2xl tracking-[0.08em] text-white">
                A2ADIB<span className="text-vice-pink">.</span>DEV
              </span>
              <span className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-vice-cyan sm:block">
                {activeZone}
              </span>
            </div>
          </a>

          {/* Center Tactical Navigation */}
          <nav className="hidden items-center gap-6 nav:flex">
            {hudNav.map((link) => {
              const isActive = activeDistrict === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => playClick()}
                  className={`group relative font-mono text-[11px] uppercase tracking-[0.14em] transition ${
                    isActive ? "text-vice-gold" : "text-vice-muted hover:text-white"
                  }`}
                >
                  <span className="mr-1 text-vice-pink/80">{link.num}</span>
                  {link.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-[2px] bg-vice-sunset transition-all ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right Action HUD Controls */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Respect / XP Bankroll */}
            <div className="hidden flex-col items-end leading-none lg:flex">
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-vice-dim">
                RESPECT
              </span>
              <span className="font-mono text-xs font-bold tracking-[0.08em] text-vice-green">
                ${respect.toLocaleString()}
              </span>
            </div>

            {/* Interactive Wanted Level Stars */}
            <button
              type="button"
              onClick={() => (wantedLevel >= 5 ? clearHeat() : addHeat(1))}
              title={
                wantedLevel >= 5
                  ? "MAX HEAT! Click to lose the cops"
                  : "Wanted Level — Click to raise heat"
              }
              className={`hidden items-center gap-0.5 rounded border px-2 py-1.5 transition sm:flex ${
                wantedLevel >= 5
                  ? "animate-strobe border-vice-red/70 bg-vice-red/15"
                  : "border-white/10 bg-vice-panel/80 hover:border-vice-gold/50"
              }`}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-3.5 w-3.5 transition-all ${
                    star <= wantedLevel
                      ? "fill-vice-gold text-vice-gold drop-shadow-[0_0_6px_rgba(255,209,102,0.75)]"
                      : "text-white/20"
                  }`}
                />
              ))}
            </button>

            {/* Command Menu Trigger */}
            <button
              type="button"
              onClick={() => {
                playClick();
                setWheelOpen(true);
              }}
              className="clip-cut-sm flex items-center gap-1.5 border border-vice-cyan/50 bg-vice-cyan/10 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-vice-cyan transition hover:bg-vice-cyan hover:text-vice-bg"
            >
              <Crosshair className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Command</span>
              <kbd className="hidden rounded bg-black/40 px-1 py-0.5 text-[9px] text-vice-gold md:inline">
                ⌘K
              </kbd>
            </button>

            {/* SFX Toggle */}
            <button
              type="button"
              onClick={toggleSfx}
              aria-label={sfxEnabled ? "Mute HUD sound effects" : "Enable HUD sound effects"}
              title={sfxEnabled ? "HUD SFX: ON" : "HUD SFX: OFF"}
              className={`flex h-8 w-8 items-center justify-center border transition ${
                sfxEnabled
                  ? "border-vice-pink/60 bg-vice-pink/15 text-vice-pink"
                  : "border-white/15 bg-white/5 text-vice-muted hover:text-white"
              }`}
            >
              {sfxEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex h-8 w-8 items-center justify-center border border-white/15 bg-white/5 text-white nav:hidden"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Pause Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col justify-center gap-6 bg-vice-bg/95 px-6 pt-20 backdrop-blur-xl nav:hidden">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-vice-pink">
            PAUSE MENU // SELECT DISTRICT
          </p>
          <nav className="flex flex-col gap-4">
            {hudNav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  playClick();
                  setMenuOpen(false);
                }}
                className="font-display text-4xl tracking-[0.06em] text-white transition hover:text-vice-gold"
              >
                <span className="mr-3 font-mono text-base text-vice-pink">{link.num}</span>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
