"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Cpu,
  Database,
  Flame,
  GitBranch,
  Globe,
  Layers,
  Server,
  ShieldCheck,
  X,
} from "lucide-react";
import { personal } from "@/lib/data";
import { useGame } from "./GameContext";

interface TechSlot {
  id: string;
  shortLabel: string;
  name: string;
  category: string;
  usedAt: string;
  impact: string;
  tools: string[];
  sectionId: "act1" | "act2" | "act3" | "act4";
  sectionLabel: string;
  repoSlug: string;
  repoName: string;
  icon: typeof Flame;
  color: string;
}

const TECH_SLOTS: TechSlot[] = [
  {
    id: "fastapi",
    shortLabel: "FastAPI",
    name: "Python & FastAPI",
    category: "API ENGINEERING",
    usedAt: "Govaly Ltd. · FraudCheck BD · E-Commerce API",
    impact:
      "Migrated legacy sync codebase to async FastAPI/SQLAlchemy, achieving 3× concurrency and shipping 4+ production ERP/CNF REST APIs.",
    tools: ["Python", "FastAPI", "async SQLAlchemy", "SQLModel", "Pydantic"],
    sectionId: "act1",
    sectionLabel: "Mission 01: Server Docks",
    repoSlug: "/fraudcheck-backend",
    repoName: "fraudcheck-backend",
    icon: Flame,
    color: "#ff2e93",
  },
  {
    id: "react",
    shortLabel: "Next / React",
    name: "React & Next.js",
    category: "FRONTEND ENGINEERING",
    usedAt: "Vice Stack Portfolio · E-Commerce Storefront & Admin",
    impact:
      "Built responsive TypeScript and React interfaces including multi-app e-commerce storefronts, admin dashboards, and this portfolio.",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    sectionId: "act2",
    sectionLabel: "Mission 02: Heist Board",
    repoSlug: "/a2adib_portfolio",
    repoName: "a2adib_portfolio",
    icon: Globe,
    color: "#00f0ff",
  },
  {
    id: "postgres",
    shortLabel: "Postgres",
    name: "PostgreSQL & SQL",
    category: "DATA ARCHITECTURE",
    usedAt: "Govaly Ltd. · Financial & ERP Reporting",
    impact:
      "Refactored N+1 and multi-join reporting queries into Python-side aggregation, cutting complex report execution time by 35%.",
    tools: ["PostgreSQL", "SQL", "Query Optimization", "Indexing", "RBAC Audit Trails"],
    sectionId: "act1",
    sectionLabel: "Mission 01: Server Docks",
    repoSlug: "/e-commerce-backend",
    repoName: "e-commerce-backend",
    icon: Database,
    color: "#ffd166",
  },
  {
    id: "redis",
    shortLabel: "Redis",
    name: "Redis & Caching",
    category: "PERFORMANCE & LOCKS",
    usedAt: "Govaly Ltd. · FraudCheck BD",
    impact:
      "Implemented Redis caching to slash high-traffic endpoint latency by 40% (800ms → 480ms) plus distributed locks for webhooks and vouchers.",
    tools: ["Redis", "Response Caching", "Distributed Locks", "Circuit Breakers"],
    sectionId: "act1",
    sectionLabel: "Mission 01: Server Docks",
    repoSlug: "/fraudcheck-backend",
    repoName: "fraudcheck-backend",
    icon: Cpu,
    color: "#ff6b4a",
  },
  {
    id: "alembic",
    shortLabel: "Alembic",
    name: "Alembic & Migrations",
    category: "DATA INTEGRITY",
    usedAt: "Govaly Ltd. · Production Financial Pipelines",
    impact:
      "Diagnosed ORM/schema drift causing silent insert failures and shipped targeted zero-loss Alembic migrations across live ledgers.",
    tools: ["Alembic", "Schema Versioning", "ORM Parity", "Zero-Loss Rollouts"],
    sectionId: "act1",
    sectionLabel: "Mission 01: Server Docks",
    repoSlug: "/fastapi-learing",
    repoName: "fastapi-learing",
    icon: GitBranch,
    color: "#38ef7d",
  },
  {
    id: "testing",
    shortLabel: "Testing",
    name: "pytest & Docker QA",
    category: "RELIABILITY & QA",
    usedAt: "Govaly Ltd. · Core Production Modules",
    impact:
      "Raised core test coverage to 70% with a 50+ test Dockerised integration suite and enforced Ruff linting with pre-commit hooks.",
    tools: ["pytest", "Docker Compose", "Integration Testing", "Ruff", "pre-commit"],
    sectionId: "act3",
    sectionLabel: "Mission 03: Rap Sheet",
    repoSlug: "",
    repoName: "GitHub Profile",
    icon: ShieldCheck,
    color: "#a855f7",
  },
  {
    id: "node",
    shortLabel: "Node / REST",
    name: "Node.js & Integrations",
    category: "FULL-STACK & APIS",
    usedAt: "Govaly Couriers/Payments · Freelance Marketplace · ClubSphere",
    impact:
      "Integrated Pathao, RedX, Steadfast couriers and SSLCommerz payments with webhooks; built separate API-first Node.js + React apps.",
    tools: ["Node.js", "REST APIs", "SSLCommerz", "Pathao / RedX / Steadfast", "JWT / OTP"],
    sectionId: "act2",
    sectionLabel: "Mission 02: Heist Board",
    repoSlug: "/freelance_marketplace_backend",
    repoName: "freelance_marketplace_backend",
    icon: Layers,
    color: "#00f0ff",
  },
  {
    id: "devops",
    shortLabel: "VPS / Ops",
    name: "Linux VPS & Deployment",
    category: "INFRASTRUCTURE",
    usedAt: "Production Services · AWS EC2 · Vercel",
    impact:
      "Configured and deployed production services on Linux VPS and AWS EC2 with Uvicorn, Nginx reverse proxies, and systemd supervision.",
    tools: ["Linux VPS", "AWS EC2", "Uvicorn", "Nginx", "systemd", "Vercel"],
    sectionId: "act3",
    sectionLabel: "Mission 03: Rap Sheet",
    repoSlug: "/yt_automation",
    repoName: "yt_automation",
    icon: Server,
    color: "#ff2e93",
  },
];

export default function LoadoutWheel() {
  const { wheelOpen, setWheelOpen, playClick } = useGame();
  const [selectedIdx, setSelectedIdx] = useState(0);
  const active = TECH_SLOTS[selectedIdx];
  const ActiveIcon = active.icon;

  const handleSelect = (idx: number) => {
    setSelectedIdx(idx);
    playClick();
  };

  const handleJumpToSection = () => {
    playClick();
    setWheelOpen(false);
    setTimeout(() => {
      const el = document.getElementById(active.sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 80);
  };

  return (
    <AnimatePresence>
      {wheelOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={() => setWheelOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="clip-cut relative max-h-[92vh] w-full max-w-3xl overflow-y-auto border border-vice-pink/40 bg-vice-panel/95 p-5 shadow-neon-pink sm:p-7"
          >
            {/* Header */}
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-vice-cyan">
                  INTERACTIVE STACK INSPECTOR // PRESS TAB OR ESC TO CLOSE
                </p>
                <h2 className="font-display text-4xl tracking-[0.06em] text-vice-gradient">
                  TECH STACK WHEEL
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setWheelOpen(false)}
                aria-label="Close tech stack wheel"
                className="flex h-10 w-10 items-center justify-center border border-white/15 bg-white/5 text-vice-muted transition hover:border-vice-pink hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid items-center gap-7 md:grid-cols-[310px_1fr]">
              {/* Radial Stack Wheel */}
              <div className="relative mx-auto flex h-[290px] w-[290px] items-center justify-center sm:h-[310px] sm:w-[310px]">
                <div className="pointer-events-none absolute inset-3 rounded-full border border-vice-pink/25" />
                <div className="pointer-events-none absolute inset-14 rounded-full border border-dashed border-vice-cyan/25" />

                {/* Center Hub */}
                <div className="relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-white/15 bg-vice-bg/95 p-3 text-center shadow-hud-panel">
                  <ActiveIcon className="mb-1 h-7 w-7" style={{ color: active.color }} />
                  <span className="font-display text-lg leading-tight tracking-[0.05em] text-white">
                    {active.shortLabel}
                  </span>
                  <span className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.12em] text-vice-gold">
                    {active.category.split(" ")[0]}
                  </span>
                </div>

                {/* 8 Clear Radial Slots */}
                {TECH_SLOTS.map((item, idx) => {
                  const angle = (idx / TECH_SLOTS.length) * Math.PI * 2 - Math.PI / 2;
                  const radius = 114;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  const Icon = item.icon;
                  const isSelected = idx === selectedIdx;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onMouseEnter={() => handleSelect(idx)}
                      onClick={() => handleSelect(idx)}
                      style={{ transform: `translate(${x}px, ${y}px)` }}
                      className={`absolute flex h-16 w-16 flex-col items-center justify-center rounded-full border px-1 text-center transition-all ${
                        isSelected
                          ? "scale-110 border-vice-gold bg-vice-elevated text-white shadow-neon-gold"
                          : "border-white/15 bg-vice-card/90 text-vice-muted hover:border-vice-cyan hover:text-white"
                      }`}
                    >
                      <Icon
                        className="h-4 w-4 shrink-0"
                        style={{ color: isSelected ? item.color : undefined }}
                      />
                      <span className="mt-1 font-mono text-[8px] font-semibold leading-none tracking-tight">
                        {item.shortLabel}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Real Proof & Navigation Panel */}
              <div className="flex flex-col justify-between border border-white/10 bg-vice-bg/85 p-5">
                <div>
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-vice-gold">
                    {active.category}
                  </span>
                  <h3 className="mt-1 font-display text-3xl tracking-[0.04em] text-white">
                    {active.name}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] text-vice-cyan">
                    USED IN: {active.usedAt}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-vice-muted">
                    {active.impact}
                  </p>

                  {/* Real Tools Included */}
                  <div className="mt-4">
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-vice-dim">
                      TOOLS &amp; TECHNOLOGIES
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {active.tools.map((tool) => (
                        <span
                          key={tool}
                          className="border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[10px] text-vice-text"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actionable Real Links */}
                <div className="mt-5 flex flex-wrap gap-2.5 border-t border-white/10 pt-4">
                  <button
                    type="button"
                    onClick={handleJumpToSection}
                    className="clip-cut-sm inline-flex flex-1 items-center justify-center gap-1.5 bg-vice-sunset px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-vice-bg transition hover:brightness-110"
                  >
                    <span>SEE IN {active.sectionLabel.split(":")[0]}</span>
                    <ArrowDownRight className="h-3.5 w-3.5" />
                  </button>

                  <a
                    href={`${personal.github}${active.repoSlug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 border border-vice-cyan/50 bg-vice-cyan/10 px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-vice-cyan transition hover:bg-vice-cyan hover:text-vice-bg"
                  >
                    <span>{active.repoName}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
