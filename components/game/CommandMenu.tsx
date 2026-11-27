"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  Compass,
  Copy,
  Download,
  Flame,
  Globe,
  Search,
  Shield,
  Sliders,
  Star,
  Terminal,
  Volume2,
  VolumeX,
  X,
  Zap,
} from "lucide-react";
import { personal, projects } from "@/lib/data";
import { DISTRICTS, useGame } from "./GameContext";

type MenuTab = "jump" | "stack" | "hud";

interface CommandItem {
  id: string;
  label: string;
  hint: string;
  group: "SECTIONS" | "ACTIONS" | "LIVE DEMOS";
  icon: typeof Compass;
  run: () => void;
}

const STACK_CARDS = [
  {
    name: "Python & FastAPI",
    tag: "API ENGINEERING",
    proof: "3× concurrency async migration & 4+ ERP/CNF APIs at Govaly Ltd.",
    tools: ["Python", "FastAPI", "async SQLAlchemy", "SQLModel", "Pydantic"],
    repoSlug: "/fraudcheck-backend",
  },
  {
    name: "React & Next.js",
    tag: "FRONTEND",
    proof: "TypeScript storefronts, admin dashboards, and this interactive portfolio.",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    repoSlug: "/a2adib_portfolio",
  },
  {
    name: "PostgreSQL & Redis",
    tag: "DATA & CACHING",
    proof: "35% faster multi-join reports & 40% latency cut (800ms → 480ms).",
    tools: ["PostgreSQL", "Redis", "Alembic", "Query Optimization", "Distributed Locks"],
    repoSlug: "/e-commerce-backend",
  },
  {
    name: "Integrations & QA",
    tag: "RELIABILITY",
    proof: "Pathao/RedX/Steadfast + SSLCommerz webhooks; 70% Dockerised pytest suite.",
    tools: ["pytest", "Docker", "JWT / OTP", "RBAC", "Ruff", "Linux VPS / Nginx"],
    repoSlug: "/freelance_marketplace_backend",
  },
];

export default function CommandMenu() {
  const {
    wheelOpen: menuOpen,
    setWheelOpen: setMenuOpen,
    wantedLevel,
    respect,
    overdriveMode,
    sfxEnabled,
    completedMissions,
    toggleOverdrive,
    toggleSfx,
    addHeat,
    clearHeat,
    triggerMission,
    playClick,
  } = useGame();

  const [tab, setTab] = useState<MenuTab>("jump");
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (menuOpen) {
      setQuery("");
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 40);
    }
  }, [menuOpen]);

  const commands = useMemo<CommandItem[]>(() => {
    const jumpTo = (id: string) => {
      playClick();
      setMenuOpen(false);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 60);
    };

    const sectionItems: CommandItem[] = DISTRICTS.map((d) => ({
      id: `sec-${d.id}`,
      label: `${d.code} · ${d.zone}`,
      hint: `Jump to ${d.name}`,
      group: "SECTIONS",
      icon: Compass,
      run: () => jumpTo(d.id),
    }));

    const actionItems: CommandItem[] = [
      {
        id: "act-cv",
        label: "Download CV (PDF)",
        hint: "CV_of_Abdullah_Al_Adib.pdf",
        group: "ACTIONS",
        icon: Download,
        run: () => {
          playClick();
          const a = document.createElement("a");
          a.href = personal.cvUrl;
          a.download = "CV_of_Abdullah_Al_Adib.pdf";
          a.click();
          triggerMission("cv-downloaded", "DOSSIER DOWNLOADED", "CV saved to your device", "+150 XP", "cyan");
          setMenuOpen(false);
        },
      },
      {
        id: "act-copy-email",
        label: `Copy Email (${personal.email})`,
        hint: "Clipboard",
        group: "ACTIONS",
        icon: Copy,
        run: () => {
          playClick();
          navigator.clipboard?.writeText(personal.email).catch(() => {});
          triggerMission("comms-locked", "CONTACT ACQUIRED", `Copied ${personal.email}`, "+250 RESPECT", "gold");
          setMenuOpen(false);
        },
      },
      {
        id: "act-overdrive",
        label: overdriveMode ? "Disable Vice Overdrive" : "Enable Vice Overdrive",
        hint: "Neon Canvas Boost",
        group: "ACTIONS",
        icon: Flame,
        run: () => {
          playClick();
          toggleOverdrive();
          setMenuOpen(false);
        },
      },
      {
        id: "act-heat",
        label: wantedLevel > 0 ? "Clear Wanted Level (0★)" : "Raise Wanted Level (+1★)",
        hint: `Current: ${wantedLevel}★`,
        group: "ACTIONS",
        icon: Shield,
        run: () => {
          if (wantedLevel > 0) clearHeat();
          else addHeat(1);
          setMenuOpen(false);
        },
      },
    ];

    const liveItems: CommandItem[] = projects
      .filter((p) => Boolean(p.liveUrl))
      .map((p) => ({
        id: `live-${p.slug}`,
        label: p.title,
        hint: p.liveUrl!.replace(/^https?:\/\//, ""),
        group: "LIVE DEMOS",
        icon: Globe,
        run: () => {
          playClick();
          window.open(p.liveUrl, "_blank", "noopener,noreferrer");
          setMenuOpen(false);
        },
      }));

    return [...sectionItems, ...actionItems, ...liveItems];
  }, [overdriveMode, wantedLevel, playClick, setMenuOpen, toggleOverdrive, clearHeat, addHeat, triggerMission]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (c) =>
        c.label.toLowerCase().includes(q) ||
        c.hint.toLowerCase().includes(q) ||
        c.group.toLowerCase().includes(q)
    );
  }, [commands, query]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query, tab]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (tab !== "jump" || filtered.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[activeIndex]?.run();
    }
  };

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-start justify-center bg-black/80 px-4 pt-16 pb-8 backdrop-blur-md sm:pt-24"
          onClick={() => setMenuOpen(false)}
        >
          <motion.div
            initial={{ y: -16, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: -12, scale: 0.97, opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={handleKeyDown}
            className="clip-cut relative flex max-h-[82vh] w-full max-w-2xl flex-col overflow-hidden border border-vice-pink/45 bg-vice-panel/95 shadow-neon-pink"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 bg-black/50 px-5 py-3.5">
              <div className="flex items-center gap-2.5">
                <Terminal className="h-4 w-4 text-vice-cyan" />
                <span className="font-display text-2xl tracking-[0.06em] text-white">
                  VICE OS <span className="text-vice-gradient">COMMAND MENU</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden font-mono text-[10px] uppercase tracking-[0.14em] text-vice-dim sm:inline">
                  ESC TO CLOSE
                </span>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close command menu"
                  className="flex h-8 w-8 items-center justify-center border border-white/15 bg-white/5 text-vice-muted transition hover:border-vice-pink hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* GTA Pause Menu Tabs */}
            <div className="grid grid-cols-3 border-b border-white/10 bg-black/30 font-mono text-[11px] font-semibold uppercase tracking-[0.14em]">
              {[
                { id: "jump" as MenuTab, label: "Quick Jump", icon: Search },
                { id: "stack" as MenuTab, label: "Tech Stack", icon: Zap },
                { id: "hud" as MenuTab, label: "HUD Controls", icon: Sliders },
              ].map((t) => {
                const Icon = t.icon;
                const active = tab === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => {
                      playClick();
                      setTab(t.id);
                    }}
                    className={`flex items-center justify-center gap-2 py-3 transition ${
                      active
                        ? "border-b-2 border-vice-pink bg-vice-pink/15 text-white"
                        : "text-vice-muted hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <Icon className={`h-3.5 w-3.5 ${active ? "text-vice-gold" : ""}`} />
                    <span>{t.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab 1: Quick Jump & Actions Command Palette */}
            {tab === "jump" && (
              <div className="flex min-h-0 flex-1 flex-col">
                <div className="relative border-b border-white/10 bg-vice-bg/80">
                  <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-vice-cyan" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Type a section, live demo, or action (e.g. CV, email, heist)..."
                    className="w-full bg-transparent py-3.5 pl-11 pr-4 font-mono text-xs text-white outline-none placeholder:text-vice-dim"
                  />
                </div>

                <div className="overflow-y-auto p-3">
                  {filtered.length === 0 ? (
                    <p className="py-10 text-center font-mono text-xs text-vice-muted">
                      No matching commands for &ldquo;{query}&rdquo;.
                    </p>
                  ) : (
                    <ul className="space-y-1">
                      {filtered.map((item, idx) => {
                        const Icon = item.icon;
                        const isSelected = idx === activeIndex;
                        return (
                          <li key={item.id}>
                            <button
                              type="button"
                              onMouseEnter={() => setActiveIndex(idx)}
                              onClick={item.run}
                              className={`flex w-full items-center justify-between gap-3 px-3.5 py-2.5 text-left transition ${
                                isSelected
                                  ? "border-l-2 border-vice-pink bg-vice-elevated text-white"
                                  : "border-l-2 border-transparent text-vice-muted hover:bg-white/5 hover:text-white"
                              }`}
                            >
                              <div className="flex min-w-0 items-center gap-3">
                                <Icon
                                  className={`h-4 w-4 shrink-0 ${
                                    isSelected ? "text-vice-gold" : "text-vice-cyan"
                                  }`}
                                />
                                <div className="min-w-0">
                                  <span className="block truncate font-mono text-xs font-semibold text-white">
                                    {item.label}
                                  </span>
                                  <span className="block truncate font-mono text-[10px] text-vice-dim">
                                    {item.hint}
                                  </span>
                                </div>
                              </div>
                              <span className="shrink-0 rounded bg-black/50 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-vice-cyan">
                                {item.group}
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>

                <div className="flex items-center justify-between border-t border-white/10 bg-black/40 px-4 py-2 font-mono text-[10px] text-vice-dim">
                  <span>↑↓ NAVIGATE · ENTER SELECT</span>
                  <span>SHORTCUT: TAB OR ⌘K</span>
                </div>
              </div>
            )}

            {/* Tab 2: Clean Tech Stack Grid */}
            {tab === "stack" && (
              <div className="grid gap-3 overflow-y-auto p-4 sm:grid-cols-2">
                {STACK_CARDS.map((card) => (
                  <div
                    key={card.name}
                    className="flex flex-col justify-between border border-white/10 bg-vice-bg/85 p-4"
                  >
                    <div>
                      <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-vice-gold">
                        {card.tag}
                      </span>
                      <h3 className="mt-1 font-display text-2xl tracking-[0.04em] text-white">
                        {card.name}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-vice-muted">
                        {card.proof}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {card.tools.map((tool) => (
                          <span
                            key={tool}
                            className="border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-vice-cyan"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={`${personal.github}${card.repoSlug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-vice-pink hover:text-vice-gold"
                    >
                      <span>View on GitHub</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 3: Operator HUD Controls */}
            {tab === "hud" && (
              <div className="space-y-4 overflow-y-auto p-5">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="border border-white/10 bg-vice-bg/80 p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-vice-dim">
                      RESPECT BANKROLL
                    </p>
                    <p className="mt-1 font-display text-4xl text-vice-green">
                      ${respect.toLocaleString()}
                    </p>
                    <p className="mt-1 font-mono text-[10px] text-vice-muted">
                      Missions cleared: {completedMissions.length}
                    </p>
                  </div>

                  <div className="border border-white/10 bg-vice-bg/80 p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-vice-dim">
                      WANTED LEVEL ({wantedLevel}/5)
                    </p>
                    <div className="mt-2 flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className={`h-5 w-5 ${
                            s <= wantedLevel ? "fill-vice-gold text-vice-gold" : "text-white/15"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="mt-3 flex gap-2">
                      <button
                        type="button"
                        onClick={() => addHeat(1)}
                        className="border border-vice-pink/50 bg-vice-pink/15 px-2.5 py-1 font-mono text-[10px] uppercase text-vice-pink hover:bg-vice-pink hover:text-white"
                      >
                        +1 Star
                      </button>
                      <button
                        type="button"
                        onClick={clearHeat}
                        className="border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase text-vice-muted hover:text-white"
                      >
                        Clear Heat
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => {
                      playClick();
                      toggleOverdrive();
                    }}
                    className={`flex items-center justify-between border p-4 font-mono text-xs uppercase tracking-[0.14em] transition ${
                      overdriveMode
                        ? "border-vice-pink bg-vice-pink/15 text-white"
                        : "border-white/10 bg-vice-bg/80 text-vice-muted hover:border-white/30"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Flame className="h-4 w-4 text-vice-pink" />
                      Vice Overdrive
                    </span>
                    <span className={overdriveMode ? "text-vice-green" : "text-vice-dim"}>
                      {overdriveMode ? "ON" : "OFF"}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={toggleSfx}
                    className={`flex items-center justify-between border p-4 font-mono text-xs uppercase tracking-[0.14em] transition ${
                      sfxEnabled
                        ? "border-vice-cyan bg-vice-cyan/15 text-white"
                        : "border-white/10 bg-vice-bg/80 text-vice-muted hover:border-white/30"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {sfxEnabled ? (
                        <Volume2 className="h-4 w-4 text-vice-cyan" />
                      ) : (
                        <VolumeX className="h-4 w-4 text-vice-dim" />
                      )}
                      HUD Sound Effects
                    </span>
                    <span className={sfxEnabled ? "text-vice-green" : "text-vice-dim"}>
                      {sfxEnabled ? "ON" : "OFF"}
                    </span>
                  </button>
                </div>

                <div className="flex items-center justify-between border border-white/10 bg-black/40 px-4 py-3 font-mono text-[11px] text-vice-muted">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-vice-gold" />
                    Cheat Codes: <strong className="text-white">HESOYAM</strong> ·{" "}
                    <strong className="text-white">AEZAKMI</strong> ·{" "}
                    <strong className="text-white">VICE</strong>
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-1 text-vice-cyan hover:underline"
                  >
                    Contact <ArrowDownRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
