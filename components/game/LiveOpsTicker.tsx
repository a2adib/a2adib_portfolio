"use client";

import { useEffect, useState } from "react";
import { Activity, Clock, GitCommitHorizontal, Sparkles } from "lucide-react";
import { personal } from "@/lib/data";
import { useGame } from "./GameContext";

export default function LiveOpsTicker() {
  const { overdriveMode, completedMissions } = useGame();
  const [localClock, setLocalClock] = useState("");
  const [latestRepo, setLatestRepo] = useState("yt_automation");
  const [latestDate, setLatestDate] = useState("2026-11-21");

  useEffect(() => {
    const updateClock = () => {
      try {
        const formatted = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(new Date());
        setLocalClock(formatted.toUpperCase());
      } catch {
        setLocalClock("BDT LIVE");
      }
    };
    updateClock();
    const id = setInterval(updateClock, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    fetch("/api/github/activity")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.latestRepo) setLatestRepo(data.latestRepo);
        if (data?.latestDate) setLatestDate(data.latestDate);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="relative z-40 mt-[61px] border-b border-white/10 bg-black/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-x-6 gap-y-1.5 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] sm:px-8">
        <div className="flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-1.5 text-vice-green">
            <Activity className="h-3 w-3 animate-pulse" />
            <span>LIVE OPS</span>
          </span>

          <a
            href={`${personal.github}/${latestRepo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-vice-muted transition hover:text-vice-cyan"
          >
            <GitCommitHorizontal className="h-3.5 w-3.5 text-vice-pink" />
            <span>
              LAST PUSH: <strong className="text-white">{latestRepo}</strong> ({latestDate})
            </span>
          </a>

          <span className="hidden items-center gap-1.5 text-vice-dim md:inline-flex">
            <Sparkles className="h-3 w-3 text-vice-gold" />
            <span>
              CODES: <strong className="text-vice-gold">HESOYAM</strong> ·{" "}
              <strong className="text-vice-cyan">AEZAKMI</strong> ·{" "}
              <strong className="text-vice-pink">VICE</strong>
            </span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          {overdriveMode && (
            <span className="rounded bg-vice-pink/20 px-2 py-0.5 font-bold text-vice-pink">
              OVERDRIVE ON
            </span>
          )}
          <span className="hidden text-vice-muted sm:inline">
            MISSIONS: <strong className="text-vice-gold">{completedMissions.length}</strong>
          </span>
          <span className="inline-flex items-center gap-1.5 text-vice-cyan">
            <Clock className="h-3 w-3" />
            <span>BDT {localClock || "LIVE"}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
