"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Gamepad2, Layers, Target } from "lucide-react";
import { projects } from "@/lib/data";
import { useGame } from "@/components/game/GameContext";

type Category = "ALL" | "FULL-STACK" | "FRONTEND" | "GAME";

function getCategory(slug: string): Category {
  if (slug === "shooting-1v1") return "GAME";
  if (slug === "freelance-marketplace" || slug === "clubsphere") return "FULL-STACK";
  return "FRONTEND";
}

function getDifficulty(slug: string): number {
  if (slug === "freelance-marketplace" || slug === "clubsphere") return 5;
  if (slug === "shooting-1v1") return 4;
  return 3;
}

export default function SelectedWork() {
  const [filter, setFilter] = useState<Category>("ALL");
  const { triggerMission, playClick } = useGame();

  const filtered =
    filter === "ALL"
      ? projects
      : projects.filter((p) => getCategory(p.slug) === filter);

  return (
    <section id="act2" className="relative border-b border-white/10 py-12 sm:py-14">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8">
        {/* Header + Filter Controls */}
        <div className="mb-7 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-vice-cyan">
              MISSION 02 // HEIST BOARD
            </p>
            <h2 className="mt-2 font-display text-[clamp(42px,6vw,76px)] uppercase leading-[0.94] tracking-[0.03em] text-white">
              COMPLETED <span className="text-vice-gradient">CONTRACTS</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {(["ALL", "FULL-STACK", "FRONTEND", "GAME"] as Category[]).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  playClick();
                  setFilter(cat);
                }}
                className={`clip-cut-sm px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] transition ${
                  filter === cat
                    ? "bg-vice-sunset text-vice-bg shadow-neon-pink"
                    : "border border-white/15 bg-vice-panel text-vice-muted hover:border-vice-cyan hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Mission Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, idx) => {
            const isGame = project.slug === "shooting-1v1";
            const difficulty = getDifficulty(project.slug);
            const missionCode = `OP-0${idx + 1}`;

            return (
              <motion.article
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="clip-cut group relative flex flex-col justify-between border border-white/15 bg-vice-panel p-6 transition hover:-translate-y-1 hover:border-vice-pink/60 hover:shadow-neon-pink"
              >
                {/* Top accent bar */}
                <div
                  className={`absolute inset-x-0 top-0 h-[3px] ${
                    isGame ? "bg-vice-cyan" : "bg-vice-sunset"
                  }`}
                />

                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-vice-gold">
                      {isGame ? (
                        <Gamepad2 className="h-3.5 w-3.5 text-vice-cyan" />
                      ) : (
                        <Target className="h-3.5 w-3.5 text-vice-pink" />
                      )}
                      {missionCode}
                    </span>

                    {/* Difficulty bars */}
                    <div className="flex items-center gap-1" title={`Complexity ${difficulty}/5`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className={`h-2 w-1.5 ${
                            i < difficulty ? "bg-vice-pink" : "bg-white/15"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <h3 className="mt-4 font-display text-3xl tracking-[0.04em] text-white transition group-hover:text-vice-gold">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-vice-muted">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-vice-cyan">
                    <Layers className="h-3.5 w-3.5" />
                    <span>{project.stack}</span>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          triggerMission(
                            `repo-${project.slug}`,
                            "INTEL ACCESSED",
                            `Opened ${project.title} repository`,
                            "+100 XP",
                            "cyan"
                          )
                        }
                        className="inline-flex items-center gap-1.5 border border-white/15 bg-white/5 px-3.5 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition hover:border-vice-gold hover:bg-vice-gold hover:text-vice-bg"
                      >
                        <span>{link.label.replace(" ↗", "")}</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
