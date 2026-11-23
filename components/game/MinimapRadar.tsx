"use client";

import { useState } from "react";
import { Compass, Crosshair, Minimize2, Maximize2 } from "lucide-react";
import { DISTRICTS, DistrictId, useGame } from "./GameContext";

export default function MinimapRadar() {
  const { activeDistrict, playClick, completedMissions } = useGame();
  const [collapsed, setCollapsed] = useState(false);

  const current = DISTRICTS.find((d) => d.id === activeDistrict) ?? DISTRICTS[0];

  const jumpTo = (id: DistrictId) => {
    playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (collapsed) {
    return (
      <button
        type="button"
        onClick={() => {
          playClick();
          setCollapsed(false);
        }}
        className="fixed bottom-5 left-5 z-50 flex items-center gap-2 border border-vice-cyan/40 bg-vice-panel/90 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-vice-cyan shadow-hud-panel backdrop-blur-md transition hover:border-vice-pink hover:text-vice-pink"
      >
        <Compass className="h-3.5 w-3.5" />
        <span>RADAR</span>
        <Maximize2 className="h-3 w-3 opacity-70" />
      </button>
    );
  }

  return (
    <aside
      aria-label="Vice City Tactical Minimap"
      className="fixed bottom-5 left-5 z-50 hidden w-[216px] overflow-hidden border border-white/15 bg-vice-panel/90 shadow-hud-panel backdrop-blur-xl sm:block"
    >
      {/* Top radar header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-black/40 px-2.5 py-1.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 animate-pulse rounded-full bg-vice-cyan" />
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-vice-text">
            {current.zone}
          </span>
        </div>
        <button
          type="button"
          onClick={() => {
            playClick();
            setCollapsed(true);
          }}
          aria-label="Minimize radar"
          className="text-vice-dim transition hover:text-vice-text"
        >
          <Minimize2 className="h-3 w-3" />
        </button>
      </div>

      {/* Tactical city grid radar */}
      <div className="relative h-[126px] w-full overflow-hidden bg-[#0c0916]">
        {/* Faux Leonida / Vice coastal grid lines */}
        <svg
          viewBox="0 0 200 120"
          className="absolute inset-0 h-full w-full opacity-45"
          aria-hidden="true"
        >
          {/* Water & coastline */}
          <path
            d="M0 0 L200 0 L200 120 L155 120 C142 96 164 68 148 44 C135 25 148 12 162 0 Z"
            fill="rgba(0, 240, 255, 0.08)"
          />
          {/* Roads */}
          <g stroke="rgba(255,255,255,0.16)" strokeWidth="1.2" fill="none">
            <path d="M18 18 L140 18 L148 105" />
            <path d="M18 52 L144 52" />
            <path d="M18 88 L138 88" />
            <path d="M52 10 L52 110" />
            <path d="M98 10 L98 110" />
            <path d="M18 18 L52 52 L98 88" stroke="rgba(255,46,147,0.35)" />
          </g>
        </svg>

        {/* Rotating radar sweep */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 animate-radar-sweep opacity-25"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(0,240,255,0.55) 0deg, rgba(0,240,255,0) 65deg, transparent 360deg)",
          }}
        />

        {/* Clickable district waypoints */}
        {DISTRICTS.map((d) => {
          const isActive = d.id === activeDistrict;
          return (
            <button
              key={d.id}
              type="button"
              onClick={() => jumpTo(d.id)}
              title={`Fast Travel: ${d.zone}`}
              style={{ left: `${d.x}%`, top: `${d.y}%` }}
              className="group absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
            >
              <span
                className={`block h-2.5 w-2.5 rounded-full border transition-transform group-hover:scale-125 ${
                  isActive
                    ? "border-white bg-vice-pink shadow-neon-pink"
                    : "border-vice-cyan/70 bg-vice-bg/90 group-hover:bg-vice-cyan"
                }`}
              />
              {isActive && (
                <span className="pointer-events-none absolute inset-0 -m-1.5 animate-ping rounded-full bg-vice-pink/50" />
              )}
            </button>
          );
        })}

        {/* Compass north indicator */}
        <span className="pointer-events-none absolute right-2 top-1.5 font-mono text-[9px] font-bold text-vice-gold">
          N
        </span>
        <span className="pointer-events-none absolute bottom-1.5 left-2 flex items-center gap-1 font-mono text-[9px] text-vice-dim">
          <Crosshair className="h-2.5 w-2.5 text-vice-pink" />
          CLICK BLIP TO WARP
        </span>
      </div>

      {/* GTA-style Health / Armor / Special bars */}
      <div className="grid grid-cols-3 gap-1 border-t border-white/10 bg-black/60 p-1.5">
        <div title="System Uptime: 99.9%">
          <div className="h-1.5 w-full overflow-hidden bg-white/10">
            <div className="h-full w-[94%] bg-vice-green" />
          </div>
        </div>
        <div title="Async Armor: Active">
          <div className="h-1.5 w-full overflow-hidden bg-white/10">
            <div className="h-full w-[82%] bg-vice-cyan" />
          </div>
        </div>
        <div title={`Missions Completed: ${completedMissions.length}`}>
          <div className="h-1.5 w-full overflow-hidden bg-white/10">
            <div
              className="h-full bg-vice-gold transition-all duration-500"
              style={{ width: `${Math.min(100, 30 + completedMissions.length * 20)}%` }}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
