"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Cpu,
  Database,
  Flame,
  GitBranch,
  Layers,
  Server,
  ShieldCheck,
  Terminal,
  X,
} from "lucide-react";
import { useGame } from "./GameContext";

const ARSENAL = [
  {
    name: "FastAPI",
    slot: "PRIMARY",
    role: "Async HTTP Engine",
    detail: "High-concurrency Python APIs rebuilt end-to-end for non-blocking I/O.",
    stats: { speed: 96, reliability: 92, scale: 94 },
    icon: Flame,
    color: "#ff2e93",
  },
  {
    name: "PostgreSQL",
    slot: "HEAVY",
    role: "Relational Core",
    detail: "Complex multi-join financial reporting refactored for 35% faster queries.",
    stats: { speed: 88, reliability: 98, scale: 92 },
    icon: Database,
    color: "#00f0ff",
  },
  {
    name: "Redis",
    slot: "BOOST",
    role: "Latency Nitro",
    detail: "Caching layer slashing high-traffic response times from 800ms to 480ms.",
    stats: { speed: 99, reliability: 90, scale: 95 },
    icon: Cpu,
    color: "#ff6b4a",
  },
  {
    name: "async SQLAlchemy",
    slot: "TACTICAL",
    role: "Non-Blocking ORM",
    detail: "Eliminates sync bottlenecks and powers ~3× more concurrent requests.",
    stats: { speed: 91, reliability: 93, scale: 90 },
    icon: Layers,
    color: "#ffd166",
  },
  {
    name: "Alembic",
    slot: "PRECISION",
    role: "Zero-Loss Migrations",
    detail: "Targeted schema revisions restoring financial pipeline data integrity.",
    stats: { speed: 84, reliability: 99, scale: 88 },
    icon: GitBranch,
    color: "#38ef7d",
  },
  {
    name: "pytest",
    slot: "ARMOR",
    role: "Regression Shield",
    detail: "70% test coverage on core legacy modules to keep ledgers rock-solid.",
    stats: { speed: 85, reliability: 97, scale: 86 },
    icon: ShieldCheck,
    color: "#a855f7",
  },
  {
    name: "VPS · Nginx",
    slot: "INFRA",
    role: "Production Ops",
    detail: "Uvicorn, Nginx, and systemd deployments tuned for steady uptime.",
    stats: { speed: 89, reliability: 94, scale: 90 },
    icon: Server,
    color: "#00f0ff",
  },
  {
    name: "React · JS",
    slot: "SIDEARM",
    role: "Frontend & Canvas",
    detail: "Full-stack dashboards, marketplaces, and real-time browser games.",
    stats: { speed: 87, reliability: 88, scale: 85 },
    icon: Terminal,
    color: "#ff2e93",
  },
];

export default function LoadoutWheel() {
  const { wheelOpen, setWheelOpen, playClick, triggerMission } = useGame();
  const [selectedIdx, setSelectedIdx] = useState(0);
  const active = ARSENAL[selectedIdx];
  const ActiveIcon = active.icon;

  const handleSelect = (idx: number) => {
    setSelectedIdx(idx);
    playClick();
  };

  const handleEquip = () => {
    triggerMission(
      `equip-${active.name.toLowerCase()}`,
      "LOADOUT EQUIPPED",
      `${active.name} armed — ${active.role}`,
      "+150 XP",
      "cyan"
    );
    setWheelOpen(false);
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
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="clip-cut relative w-full max-w-3xl border border-vice-pink/40 bg-vice-panel/95 p-6 shadow-neon-pink sm:p-8"
          >
            {/* Header */}
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-vice-cyan">
                  TACTICAL ARSENAL // PRESS TAB OR ESC TO CLOSE
                </p>
                <h2 className="font-display text-4xl tracking-[0.06em] text-vice-gradient">
                  ENGINEER LOADOUT WHEEL
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setWheelOpen(false)}
                aria-label="Close loadout wheel"
                className="flex h-10 w-10 items-center justify-center border border-white/15 bg-white/5 text-vice-muted transition hover:border-vice-pink hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid items-center gap-8 md:grid-cols-[1fr_1.05fr]">
              {/* Radial Wheel */}
              <div className="relative mx-auto flex h-[280px] w-[280px] items-center justify-center sm:h-[310px] sm:w-[310px]">
                {/* Outer rings */}
                <div className="pointer-events-none absolute inset-2 rounded-full border border-vice-pink/25" />
                <div className="pointer-events-none absolute inset-12 rounded-full border border-dashed border-vice-cyan/25" />

                {/* Center Emblem */}
                <div className="relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-white/15 bg-vice-bg/95 p-3 text-center shadow-hud-panel">
                  <ActiveIcon className="mb-1 h-7 w-7" style={{ color: active.color }} />
                  <span className="font-display text-lg leading-none tracking-[0.06em] text-white">
                    {active.name}
                  </span>
                  <span className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-vice-gold">
                    {active.slot}
                  </span>
                </div>

                {/* 8 Radial Slots */}
                {ARSENAL.map((item, idx) => {
                  const angle = (idx / ARSENAL.length) * Math.PI * 2 - Math.PI / 2;
                  const radius = 116;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  const Icon = item.icon;
                  const isSelected = idx === selectedIdx;

                  return (
                    <button
                      key={item.name}
                      type="button"
                      onMouseEnter={() => handleSelect(idx)}
                      onClick={() => handleSelect(idx)}
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                      }}
                      className={`absolute flex h-14 w-14 flex-col items-center justify-center rounded-full border transition-all ${
                        isSelected
                          ? "scale-110 border-vice-gold bg-vice-elevated text-white shadow-neon-gold"
                          : "border-white/15 bg-vice-card/90 text-vice-muted hover:border-vice-cyan hover:text-white"
                      }`}
                    >
                      <Icon className="h-4 w-4" style={{ color: isSelected ? item.color : undefined }} />
                      <span className="mt-0.5 max-w-[48px] truncate font-mono text-[8px] uppercase">
                        {item.name.split(" ")[0]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Tool Stats Panel */}
              <div className="flex flex-col justify-between border border-white/10 bg-vice-bg/80 p-5">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-vice-gold">
                      SLOT // {active.slot}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-vice-cyan">
                      {active.role}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-3xl tracking-[0.05em] text-white">
                    {active.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-vice-muted">
                    {active.detail}
                  </p>

                  {/* GTA Stat Bars */}
                  <div className="mt-5 space-y-3 font-mono text-[11px] uppercase tracking-[0.14em]">
                    {[
                      { label: "SPEED", value: active.stats.speed, bar: "bg-vice-pink" },
                      { label: "RELIABILITY", value: active.stats.reliability, bar: "bg-vice-cyan" },
                      { label: "SCALE", value: active.stats.scale, bar: "bg-vice-gold" },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <div className="mb-1 flex justify-between text-vice-muted">
                          <span>{stat.label}</span>
                          <span className="text-white">{stat.value}/100</span>
                        </div>
                        <div className="h-2 w-full overflow-hidden bg-white/10">
                          <motion.div
                            key={`${active.name}-${stat.label}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${stat.value}%` }}
                            transition={{ duration: 0.35 }}
                            className={`h-full ${stat.bar}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleEquip}
                  className="clip-cut-sm mt-6 w-full bg-vice-sunset py-3 font-mono text-xs font-bold uppercase tracking-[0.16em] text-vice-bg transition hover:brightness-110"
                >
                  EQUIP {active.name.toUpperCase()} →
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
