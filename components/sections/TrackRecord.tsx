"use client";

import { motion } from "framer-motion";
import { Briefcase, Crosshair, GraduationCap, Rocket } from "lucide-react";
import { skillGroups, timeline } from "@/lib/data";
import { useGame } from "@/components/game/GameContext";

export default function TrackRecord() {
  const { setWheelOpen, playClick } = useGame();

  return (
    <section id="act3" className="relative border-b border-white/10 py-12 sm:py-14">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8">
        <div className="mb-7">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-vice-gold">
            MISSION 03 // DOWNTOWN OPS
          </p>
          <h2 className="mt-2 font-display text-[clamp(42px,6vw,76px)] uppercase leading-[0.94] tracking-[0.03em] text-white">
            RAP SHEET &amp; <span className="text-cyan-gradient">TRACK RECORD</span>
          </h2>
        </div>

        {/* Career Dossier Timeline */}
        <div className="space-y-6">
          {timeline.map((entry, idx) => {
            const Icon =
              entry.type === "Full-time"
                ? Briefcase
                : entry.type === "Startup"
                  ? Rocket
                  : GraduationCap;

            return (
              <motion.div
                key={`${entry.org}-${entry.period}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="clip-cut grid gap-6 border border-white/15 bg-vice-panel p-6 shadow-hud-panel md:grid-cols-[240px_1fr] md:p-8"
              >
                {/* Left Metadata Column */}
                <div className="border-b border-white/10 pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-6">
                  <div className="inline-flex items-center gap-2 rounded border border-vice-pink/40 bg-vice-pink/10 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-vice-pink">
                    <Icon className="h-3.5 w-3.5" />
                    <span>{entry.type}</span>
                  </div>
                  <p className="mt-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-vice-cyan">
                    {entry.period}
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-vice-dim">
                    FILE REF // 0{idx + 1}
                  </p>
                </div>

                {/* Right Role & Impact Details */}
                <div>
                  <h3 className="font-display text-3xl tracking-[0.04em] text-white sm:text-4xl">
                    {entry.role}{" "}
                    <span className="text-vice-gold">{entry.org}</span>
                  </h3>

                  {entry.bullets && (
                    <ol className="mt-5 space-y-3">
                      {entry.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex gap-3.5 text-sm leading-relaxed text-vice-muted sm:text-[15px]"
                        >
                          <span className="mt-0.5 font-mono text-xs font-bold text-vice-pink">
                            0{bIdx + 1}
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ol>
                  )}

                  {entry.body && (
                    <p className="mt-4 font-mono text-sm text-vice-muted">
                      {entry.body}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tactical Skill Matrix */}
        <div className="mt-16 border border-white/15 bg-vice-panel/80 p-6 sm:p-8">
          <div className="mb-8 flex flex-col justify-between gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-vice-cyan">
                EQUIPPED ARSENAL
              </p>
              <h3 className="mt-1 font-display text-3xl tracking-[0.05em] text-white">
                TECHNICAL LOADOUT
              </h3>
            </div>
            <button
              type="button"
              onClick={() => {
                playClick();
                setWheelOpen(true);
              }}
              className="clip-cut-sm inline-flex items-center gap-2 border border-vice-gold/50 bg-vice-gold/10 px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-vice-gold transition hover:bg-vice-gold hover:text-vice-bg"
            >
              <Crosshair className="h-4 w-4" />
              <span>INSPECT RADIAL WHEEL</span>
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.title} className="border border-white/10 bg-vice-bg/70 p-5">
                <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-vice-pink">
                  {group.title}
                </p>
                <ul className="space-y-2 font-mono text-xs text-vice-text">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-vice-cyan" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
