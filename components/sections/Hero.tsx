"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Crosshair, Download, Flame, Radio, Shield, UserCheck, Zap } from "lucide-react";
import { metrics, personal } from "@/lib/data";
import { useGame } from "@/components/game/GameContext";

const STAT_META = [
  { fill: 92, bar: "from-vice-pink to-vice-coral" },
  { fill: 84, bar: "from-vice-coral to-vice-gold" },
  { fill: 78, bar: "from-vice-cyan to-vice-purple" },
  { fill: 70, bar: "from-vice-green to-vice-cyan" },
];

export default function Hero() {
  const { setWheelOpen, playClick, triggerMission, addHeat, wantedLevel } = useGame();
  const [imgFailed, setImgFailed] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -py * 10, y: px * 10 });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/10 pt-8 pb-10 sm:pt-10 sm:pb-12"
    >
      {/* Leonida Sunset & Neon Atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-vice-horizon" />
      <div className="pointer-events-none absolute inset-0 vice-grid opacity-50" />

      {/* Glowing Vice Sunset Sun + Palm Skyline Silhouette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[280px] overflow-hidden"
      >
        <div className="absolute bottom-14 right-[8%] h-72 w-72 rounded-full bg-gradient-to-b from-vice-gold via-vice-coral to-vice-pink opacity-20 blur-2xl sm:h-96 sm:w-96" />

        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="absolute bottom-0 h-full w-full opacity-55"
        >
          <defs>
            <linearGradient id="skylineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1b1130" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#08060e" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M0 320 L0 250 L45 250 L45 210 L82 210 L82 245 L130 245 L130 185 L168 185 L168 235 L220 235 L220 198 L260 198 L260 255 L340 255 L340 220 L395 220 L395 260 L480 260 L480 230 L535 230 L535 265 L650 265 L650 240 L710 240 L710 270 L840 270 L840 205 L885 205 L885 160 L928 160 L928 228 L990 228 L990 190 L1042 190 L1042 246 L1120 246 L1120 175 L1162 175 L1162 230 L1220 230 L1220 145 L1265 145 L1265 215 L1335 215 L1335 188 L1388 188 L1388 238 L1440 238 L1440 320 Z"
            fill="url(#skylineGrad)"
          />
          <line
            x1="0"
            y1="319"
            x2="1440"
            y2="319"
            stroke="#ff2e93"
            strokeOpacity="0.45"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1380px] items-center gap-8 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: Mission Title & Hero Briefing */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-4 inline-flex items-center gap-2.5 border border-vice-pink/40 bg-vice-pink/10 px-3.5 py-1.5 backdrop-blur-md"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-vice-pink" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-vice-gold">
              {personal.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="font-display text-[clamp(52px,8.2vw,108px)] uppercase leading-[0.88] tracking-[0.03em] text-white"
          >
            <span className="block">{personal.name}</span>
            <span className="block text-vice-gradient">SOFTWARE ENGINEER</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-vice-muted sm:text-lg"
          >
            {personal.intro}
          </motion.p>

          {/* Action CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            <a
              href="#act1"
              onClick={() =>
                triggerMission(
                  "start-mission",
                  "MISSION STARTED",
                  "Entering Server Docks — Legacy Overdrive",
                  "+100 XP",
                  "pink"
                )
              }
              className="clip-cut-sm group inline-flex items-center gap-2 bg-vice-sunset px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-vice-bg shadow-neon-pink transition hover:brightness-110"
            >
              <Flame className="h-4 w-4" />
              <span>START MISSION</span>
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>

            <button
              type="button"
              onClick={() => {
                playClick();
                setWheelOpen(true);
              }}
              className="clip-cut-sm inline-flex items-center gap-2 border border-vice-cyan/50 bg-vice-cyan/10 px-5 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-vice-cyan transition hover:bg-vice-cyan hover:text-vice-bg"
            >
              <Crosshair className="h-4 w-4" />
              <span>ARSENAL [TAB]</span>
            </button>

            <a
              href={personal.cvUrl}
              download="CV_of_Abdullah_Al_Adib.pdf"
              onClick={() =>
                triggerMission(
                  "cv-downloaded",
                  "DOSSIER DOWNLOADED",
                  "CV_of_Abdullah_Al_Adib.pdf saved",
                  "+150 XP",
                  "cyan"
                )
              }
              className="inline-flex items-center gap-2 border border-vice-gold/50 bg-vice-gold/10 px-5 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-vice-gold transition hover:bg-vice-gold hover:text-vice-bg"
            >
              <Download className="h-4 w-4" />
              <span>DOWNLOAD CV</span>
            </a>

            <a
              href="#contact"
              onClick={() => playClick()}
              className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-5 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-vice-text transition hover:border-vice-pink hover:text-vice-pink"
            >
              <Radio className="h-4 w-4 text-vice-pink" />
              <span>COMMS</span>
            </a>
          </motion.div>
        </div>

        {/* Right: 3D Character Portrait + GTA VI Operator Dossier Card */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTilt}
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
          className="clip-cut relative border border-white/15 bg-vice-panel/90 p-5 shadow-hud-panel backdrop-blur-xl transition-transform duration-150 ease-out sm:p-6"
        >
          <div className="absolute inset-x-0 top-0 h-[3px] bg-vice-sunset" />

          {/* 3D Character Frame */}
          <div className="relative mb-5 overflow-hidden border border-vice-pink/30 bg-vice-bg">
            <div className="relative aspect-[4/4.2] w-full overflow-hidden">
              {!imgFailed ? (
                <img
                  src="/image.jpeg"
                  alt={`${personal.name} — GTA VI 3D Operator`}
                  onError={() => setImgFailed(true)}
                  className="h-full w-full object-cover object-[50%_14%] transition-transform duration-500 hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-vice-card via-vice-panel to-vice-bg p-6 text-center">
                  <UserCheck className="h-10 w-10 text-vice-cyan" />
                  <p className="font-display text-2xl tracking-[0.06em] text-white">
                    3D AVATAR READY
                  </p>
                  <p className="max-w-xs font-mono text-[11px] text-vice-muted">
                    Save the generated 3D character as{" "}
                    <span className="text-vice-gold">public/image.jpeg</span> to display it here.
                  </p>
                </div>
              )}

              {/* Neon Bottom Vignette & HUD Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-vice-panel via-transparent to-transparent" />
              <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded bg-black/70 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-vice-green backdrop-blur-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-vice-green" />
                ONLINE // GOVALY LTD.
              </div>
              <div className="absolute right-3 top-3 rounded bg-black/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-vice-gold backdrop-blur-sm">
                HEAT {wantedLevel}/5
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-vice-cyan">
                    OPERATOR DOSSIER // ID #A2-06
                  </p>
                  <h2 className="font-display text-2xl leading-none tracking-[0.06em] text-white sm:text-3xl">
                    {personal.title}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* GTA-Style Character Stat Bars */}
          <div className="space-y-3">
            {metrics.map((metric, idx) => {
              const style = STAT_META[idx % STAT_META.length];
              return (
                <div key={metric.label}>
                  <div className="mb-1 flex items-baseline justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-vice-muted">
                      {metric.label}
                    </span>
                    <span className="font-display text-xl leading-none tracking-[0.04em] text-white">
                      {metric.value}
                      <span className="text-vice-gold">{metric.suffix}</span>
                    </span>
                  </div>
                  <div className="grid grid-cols-10 gap-1">
                    {Array.from({ length: 10 }).map((_, seg) => {
                      const active = (seg + 1) * 10 <= style.fill;
                      return (
                        <div
                          key={seg}
                          className={`h-1.5 ${
                            active ? `bg-gradient-to-r ${style.bar}` : "bg-white/10"
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Interactive Action Strip */}
          <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
            <div className="flex items-center gap-2 font-mono text-[11px] text-vice-muted">
              <Shield className="h-4 w-4 text-vice-cyan" />
              <span>ZERO-DOWNTIME MIGRATIONS</span>
            </div>
            <button
              type="button"
              onClick={() => addHeat(1)}
              className="inline-flex items-center gap-1.5 border border-vice-pink/40 bg-vice-pink/10 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-vice-pink transition hover:bg-vice-pink hover:text-white"
            >
              <Zap className="h-3 w-3" />
              <span>+HEAT</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
