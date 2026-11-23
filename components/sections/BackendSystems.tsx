"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Cpu, Database, Play, RotateCcw, Zap } from "lucide-react";
import { backendAct } from "@/lib/data";
import { useGame } from "@/components/game/GameContext";

export default function BackendSystems() {
  const [asyncActive, setAsyncActive] = useState(false);
  const [redisActive, setRedisActive] = useState(false);
  const { triggerMission, playClick } = useGame();

  const handleDeployAsync = () => {
    playClick();
    setAsyncActive(true);
    if (redisActive) {
      triggerMission(
        "legacy-overdrive",
        "MISSION PASSED: OVERDRIVE",
        "Async FastAPI + Redis Cache deployed at 480ms",
        "+250 RESPECT",
        "gold"
      );
    }
  };

  const handleEngageRedis = () => {
    playClick();
    setRedisActive(true);
    triggerMission(
      "legacy-overdrive",
      "MISSION PASSED: OVERDRIVE",
      "Redis caching & Alembic migrations restored pipelines",
      "+250 RESPECT",
      "cyan"
    );
  };

  const handleReset = () => {
    playClick();
    setAsyncActive(false);
    setRedisActive(false);
  };

  const currentLatency = redisActive ? 480 : asyncActive ? 610 : 800;
  const latencyPercent = Math.round((currentLatency / 800) * 100);

  return (
    <section id="act1" className="relative border-b border-white/10 py-12 sm:py-14">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8">
        {/* Mission Header */}
        <div className="mb-7 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-vice-pink">
              MISSION 01 // SERVER DOCKS
            </p>
            <h2 className="mt-2 font-display text-[clamp(42px,6vw,76px)] uppercase leading-[0.94] tracking-[0.03em] text-white">
              {backendAct.heading}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-vice-muted">
              {backendAct.body}
            </p>
          </div>

          {/* Interactive Mission Trigger Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleDeployAsync}
              disabled={asyncActive}
              className={`clip-cut-sm inline-flex items-center gap-2 px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.14em] transition ${
                asyncActive
                  ? "border border-vice-green/40 bg-vice-green/15 text-vice-green"
                  : "bg-vice-pink text-white shadow-neon-pink hover:brightness-110"
              }`}
            >
              {asyncActive ? <CheckCircle2 className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              <span>{asyncActive ? "ASYNC DEPLOYED" : "1. DEPLOY ASYNC"}</span>
            </button>

            <button
              type="button"
              onClick={handleEngageRedis}
              disabled={redisActive}
              className={`clip-cut-sm inline-flex items-center gap-2 px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.14em] transition ${
                redisActive
                  ? "border border-vice-cyan/40 bg-vice-cyan/15 text-vice-cyan"
                  : "border border-vice-cyan/60 bg-vice-cyan/10 text-vice-cyan hover:bg-vice-cyan hover:text-vice-bg"
              }`}
            >
              {redisActive ? <CheckCircle2 className="h-4 w-4" /> : <Zap className="h-4 w-4" />}
              <span>{redisActive ? "REDIS + ALEMBIC LIVE" : "2. ENGAGE REDIS"}</span>
            </button>

            {(asyncActive || redisActive) && (
              <button
                type="button"
                onClick={handleReset}
                title="Reset simulation"
                className="flex h-10 w-10 items-center justify-center border border-white/15 bg-white/5 text-vice-muted transition hover:border-white/40 hover:text-white"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Main Tactical Grid */}
        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Live Interactive Code Terminal */}
          <div className="clip-cut overflow-hidden border border-white/15 bg-vice-panel shadow-hud-panel">
            <div className="flex items-center justify-between border-b border-white/10 bg-black/50 px-5 py-3">
              <div className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-vice-pink" />
                <span className="h-2.5 w-2.5 rounded-full bg-vice-gold" />
                <span className="h-2.5 w-2.5 rounded-full bg-vice-cyan" />
                <span className="ml-2 font-mono text-xs text-vice-muted">
                  {backendAct.codeFile}
                </span>
              </div>
              <span
                className={`rounded px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] ${
                  asyncActive
                    ? "bg-vice-green/15 text-vice-green"
                    : "bg-vice-red/15 text-vice-red"
                }`}
              >
                {asyncActive ? "NON-BLOCKING ASYNC" : "LEGACY SYNC BLOCKING"}
              </span>
            </div>

            <pre className="overflow-x-auto p-6 font-mono text-xs leading-7 text-vice-text sm:text-[13px]">
              {asyncActive ? (
                <code>
                  <span className="text-vice-pink">async def</span>{" "}
                  <span className="text-vice-cyan">build_financial_report</span>(
                  session: AsyncSession, station_id: int):
                  {"\n"}    cache_key ={" "}
                  <span className="text-vice-gold">f&quot;report:station:&#123;station_id&#125;&quot;</span>
                  {"\n"}    <span className="text-vice-pink">if</span>{" "}
                  {redisActive ? (
                    <span className="text-vice-green">
                      cached := await redis.get(cache_key):  # 480ms HIT
                    </span>
                  ) : (
                    <span className="text-vice-muted">
                      False:  # Engage Redis to unlock 480ms cache hits
                    </span>
                  )}
                  {"\n"}        <span className="text-vice-pink">return</span>{" "}
                  ReportPayload.model_validate_json(cached)
                  {"\n"}
                  {"\n"}    rows = <span className="text-vice-pink">await</span>{" "}
                  session.execute(select(LedgerEntry).where(...))
                  {"\n"}    <span className="text-vice-dim"># Python-side aggregation: 35% faster multi-join reports</span>
                  {"\n"}    payload = aggregate_ledger_entries(rows.scalars().all())
                  {"\n"}    <span className="text-vice-pink">return</span> payload
                </code>
              ) : (
                <code>
                  <span className="text-vice-red">def</span>{" "}
                  <span className="text-vice-muted">build_financial_report</span>(
                  db: Session, station_id: int):
                  {"\n"}    <span className="text-vice-red"># WARNING: blocking I/O stalls worker pool (~800ms)</span>
                  {"\n"}    jobs = db.query(Job).filter_by(station_id=station_id).all()
                  {"\n"}    results = []
                  {"\n"}    <span className="text-vice-red">for</span> job{" "}
                  <span className="text-vice-red">in</span> jobs:
                  {"\n"}        <span className="text-vice-dim"># N+1 fan-out query bottleneck</span>
                  {"\n"}        results.append(db.query(PartyLedger).filter_by(job_id=job.id).all())
                  {"\n"}    <span className="text-vice-red">return</span> results
                </code>
              )}
            </pre>

            {/* Gear / Tech Chips */}
            <div className="flex flex-wrap gap-2 border-t border-white/10 bg-black/30 px-6 py-4">
              {backendAct.chips.map((chip) => (
                <span
                  key={chip}
                  className="border border-white/15 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-vice-cyan"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Telemetry Cards (Latency & Schema Integrity) */}
          <div className="flex flex-col gap-6">
            {/* Response Time Telemetry */}
            <div className="border border-white/15 bg-vice-panel p-6 shadow-hud-panel">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-vice-gold">
                  <Cpu className="h-4 w-4" />
                  {backendAct.responseTime.label}
                </span>
                <span className="font-mono text-xs text-vice-dim">
                  TARGET: {backendAct.responseTime.after}
                </span>
              </div>

              <div className="mt-4 flex items-baseline gap-3">
                <span
                  className={`font-display text-5xl tracking-[0.04em] ${
                    redisActive ? "text-vice-cyan" : "text-vice-pink"
                  }`}
                >
                  {currentLatency}MS
                </span>
                <span className="font-mono text-xs text-vice-muted">
                  (BASE: {backendAct.responseTime.before})
                </span>
              </div>

              <div className="mt-4 h-3 w-full overflow-hidden bg-white/10">
                <motion.div
                  animate={{ width: `${latencyPercent}%` }}
                  transition={{ duration: 0.45 }}
                  className={`h-full ${
                    redisActive
                      ? "bg-gradient-to-r from-vice-cyan to-vice-green"
                      : "bg-gradient-to-r from-vice-red to-vice-pink"
                  }`}
                />
              </div>

              <p className="mt-3 text-sm text-vice-muted">
                {backendAct.responseTime.caption}
              </p>
            </div>

            {/* Data Integrity Feed */}
            <div className="flex-1 border border-white/15 bg-vice-panel p-6 shadow-hud-panel">
              <div className="mb-4 flex items-center justify-between">
                <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-vice-cyan">
                  <Database className="h-4 w-4" />
                  {backendAct.dataIntegrity.label}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-vice-dim">
                  ALEMBIC LOG
                </span>
              </div>

              <div className="space-y-2.5 font-mono text-xs">
                {backendAct.dataIntegrity.lines.map((line, i) => {
                  const healed = redisActive || line.ok;
                  return (
                    <div
                      key={i}
                      className={`flex items-center gap-2.5 border px-3 py-2 transition ${
                        healed
                          ? "border-vice-green/30 bg-vice-green/10 text-vice-green"
                          : "border-vice-red/30 bg-vice-red/10 text-vice-red"
                      }`}
                    >
                      {healed ? (
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                      ) : (
                        <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
                      )}
                      <span>{healed && !line.ok ? "schema drift patched — verified" : line.text}</span>
                    </div>
                  );
                })}
              </div>

              <p className="mt-4 text-sm text-vice-muted">
                {backendAct.dataIntegrity.caption}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
