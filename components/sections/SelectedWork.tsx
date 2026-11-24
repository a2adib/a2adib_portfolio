"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  FolderGit2,
  Gamepad2,
  Globe,
  Layers,
  Search,
  Target,
} from "lucide-react";
import { githubReposFallback, projects, type GitHubRepo } from "@/lib/data";
import { useGame } from "@/components/game/GameContext";

type Category = "ALL" | "LIVE" | "FULL-STACK" | "FRONTEND" | "GAME";

function getDifficulty(slug: string): number {
  if (
    slug === "a2adib-portfolio" ||
    slug === "ecommerce-platform" ||
    slug === "fraudcheck-bd" ||
    slug === "freelance-marketplace" ||
    slug === "clubsphere"
  ) {
    return 5;
  }
  if (slug === "shooting-1v1" || slug === "customer-support-zone") return 4;
  return 3;
}

const LANG_COLORS: Record<string, string> = {
  Python: "bg-[#3572A5]",
  TypeScript: "bg-[#3178C6]",
  JavaScript: "bg-[#F1E05A]",
  HTML: "bg-[#E34C26]",
  Swift: "bg-[#F05138]",
  Makefile: "bg-[#427819]",
  Tcl: "bg-[#E4CC98]",
};

export default function SelectedWork() {
  const [filter, setFilter] = useState<Category>("ALL");
  const [repos, setRepos] = useState<GitHubRepo[]>(githubReposFallback);
  const [repoSearch, setRepoSearch] = useState("");
  const [langFilter, setLangFilter] = useState("ALL");
  const { triggerMission, playClick } = useGame();

  // Sync live GitHub repos from our API route on mount
  useEffect(() => {
    let active = true;
    fetch("/api/github/repos")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (active && data && Array.isArray(data.repos) && data.repos.length > 0) {
          setRepos(data.repos);
        }
      })
      .catch(() => {
        // Keep static fallback silently
      });
    return () => {
      active = false;
    };
  }, []);

  const filteredProjects = useMemo(() => {
    if (filter === "ALL") return projects;
    if (filter === "LIVE") return projects.filter((p) => Boolean(p.liveUrl));
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  const availableLanguages = useMemo(() => {
    const counts = new Map<string, number>();
    for (const r of repos) {
      const lang = r.language || "Code";
      counts.set(lang, (counts.get(lang) ?? 0) + 1);
    }
    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([lang]) => lang);
  }, [repos]);

  const filteredRepos = useMemo(() => {
    const q = repoSearch.trim().toLowerCase();
    return repos.filter((r) => {
      if (langFilter === "LIVE" && !r.homepage) return false;
      if (langFilter !== "ALL" && langFilter !== "LIVE" && (r.language || "Code") !== langFilter) {
        return false;
      }
      if (!q) return true;
      return (
        r.name.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.language.toLowerCase().includes(q)
      );
    });
  }, [repos, repoSearch, langFilter]);

  const liveRepoCount = useMemo(() => repos.filter((r) => Boolean(r.homepage)).length, [repos]);

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
            {(["ALL", "LIVE", "FULL-STACK", "FRONTEND", "GAME"] as Category[]).map((cat) => (
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
                {cat === "LIVE" ? `LIVE (${projects.filter((p) => p.liveUrl).length})` : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Mission Cards Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, idx) => {
            const isGame = project.category === "GAME";
            const difficulty = getDifficulty(project.slug);
            const missionCode = `OP-${String(idx + 1).padStart(2, "0")}`;

            return (
              <motion.article
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.3, delay: Math.min(idx * 0.04, 0.2) }}
                className="clip-cut group relative flex flex-col justify-between border border-white/15 bg-vice-panel p-5 transition hover:-translate-y-1 hover:border-vice-pink/60 hover:shadow-neon-pink"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-[3px] ${
                    project.liveUrl
                      ? "bg-gradient-to-r from-vice-green via-vice-cyan to-vice-pink"
                      : isGame
                        ? "bg-vice-cyan"
                        : "bg-vice-sunset"
                  }`}
                />

                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-vice-gold">
                        {isGame ? (
                          <Gamepad2 className="h-3.5 w-3.5 text-vice-cyan" />
                        ) : (
                          <Target className="h-3.5 w-3.5 text-vice-pink" />
                        )}
                        {missionCode}
                      </span>

                      {project.liveUrl && (
                        <span className="inline-flex items-center gap-1 rounded bg-vice-green/15 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-vice-green">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-vice-green" />
                          LIVE
                        </span>
                      )}
                    </div>

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

                  <h3 className="mt-3 font-display text-3xl tracking-[0.04em] text-white transition group-hover:text-vice-gold">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-vice-muted">
                    {project.description}
                  </p>
                </div>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <div className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-vice-cyan">
                    <Layers className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{project.stack}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          triggerMission(
                            `live-${project.slug}`,
                            "LIVE DEMO LAUNCHED",
                            `Opened live deployment for ${project.title}`,
                            "+150 XP",
                            "gold"
                          )
                        }
                        className="inline-flex items-center gap-1.5 bg-vice-green px-3.5 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-vice-bg transition hover:brightness-110"
                      >
                        <Globe className="h-3.5 w-3.5" />
                        <span>LIVE SITE</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}

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
                        className="inline-flex items-center gap-1.5 border border-white/15 bg-white/5 px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition hover:border-vice-gold hover:bg-vice-gold hover:text-vice-bg"
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

        {/* Complete GitHub Repository Vault */}
        <div className="mt-10 border border-white/15 bg-vice-panel/85 p-5 shadow-hud-panel sm:p-6">
          <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-5 lg:flex-row lg:items-center">
            <div>
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-vice-pink">
                <FolderGit2 className="h-4 w-4 text-vice-cyan" />
                GITHUB VAULT // ALL PUBLIC REPOSITORIES
              </p>
              <h3 className="mt-1 font-display text-3xl tracking-[0.05em] text-white">
                {repos.length} REPOSITORIES{" "}
                <span className="text-vice-cyan">· {liveRepoCount} LIVE DEPLOYMENTS</span>
              </h3>
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-vice-dim" />
              <input
                type="text"
                value={repoSearch}
                onChange={(e) => setRepoSearch(e.target.value)}
                placeholder="Search repos or language..."
                aria-label="Search GitHub repositories"
                className="w-full border border-white/15 bg-vice-bg py-2 pl-9 pr-3 font-mono text-xs text-white outline-none transition placeholder:text-vice-dim focus:border-vice-cyan"
              />
            </div>
          </div>

          {/* Language & Live Filter Pills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {["ALL", "LIVE", ...availableLanguages].map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => {
                  playClick();
                  setLangFilter(lang);
                }}
                className={`px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] transition ${
                  langFilter === lang
                    ? "bg-vice-cyan text-vice-bg"
                    : "border border-white/10 bg-vice-bg/80 text-vice-muted hover:border-vice-pink hover:text-white"
                }`}
              >
                {lang === "LIVE" ? `LIVE ONLY (${liveRepoCount})` : lang}
              </button>
            ))}
          </div>

          {/* All Repos Compact Grid */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredRepos.map((repo) => {
              const dotColor = LANG_COLORS[repo.language] || "bg-vice-pink";
              const updatedYearMonth = repo.updated_at ? repo.updated_at.slice(0, 7) : "";

              return (
                <div
                  key={repo.name}
                  className="flex flex-col justify-between border border-white/10 bg-vice-bg/85 p-4 transition hover:border-vice-cyan/60"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="truncate font-mono text-xs font-bold text-white transition hover:text-vice-gold"
                        title={repo.name}
                      >
                        {repo.name}
                      </a>
                      {repo.homepage && (
                        <span className="shrink-0 rounded bg-vice-green/15 px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-vice-green">
                          LIVE
                        </span>
                      )}
                    </div>

                    {repo.description && (
                      <p className="mt-1.5 line-clamp-2 text-xs text-vice-muted">
                        {repo.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-2 border-t border-white/5 pt-2.5 font-mono text-[10px]">
                    <div className="flex items-center gap-2 text-vice-dim">
                      <span className="inline-flex items-center gap-1.5 text-vice-muted">
                        <span className={`h-2 w-2 rounded-full ${dotColor}`} />
                        {repo.language || "Code"}
                      </span>
                      {updatedYearMonth && <span>· {updatedYearMonth}</span>}
                    </div>

                    <div className="flex items-center gap-2">
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-0.5 font-semibold text-vice-green hover:underline"
                        >
                          Live <ArrowUpRight className="h-3 w-3" />
                        </a>
                      )}
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-0.5 font-semibold text-vice-cyan hover:underline"
                      >
                        Code <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredRepos.length === 0 && (
            <p className="py-8 text-center font-mono text-xs text-vice-muted">
              No repositories matched &ldquo;{repoSearch}&rdquo;.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
