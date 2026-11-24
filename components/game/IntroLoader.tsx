"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { personal } from "@/lib/data";

const TIPS = [
  "SYNCING FASTAPI ASYNC WORKERS...",
  "WARMING REDIS CACHE LAYER (480MS)...",
  "LOADING 36 GITHUB REPOSITORIES...",
];

export default function IntroLoader() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("vice_intro_seen") === "1") {
        return;
      }
      sessionStorage.setItem("vice_intro_seen", "1");
    } catch {
      // Ignore storage restrictions
    }

    setVisible(true);

    const start = performance.now();
    const duration = 1450;
    let raf = 0;

    const tick = (now: number) => {
      const pct = Math.min(100, Math.round(((now - start) / duration) * 100));
      setProgress(pct);
      setTipIndex(pct < 38 ? 0 : pct < 76 ? 1 : 2);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setVisible(false), 180);
      }
    };

    raf = requestAnimationFrame(tick);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        setVisible(false);
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-vice-bg"
        >
          {/* Neon sunset backdrop */}
          <div className="pointer-events-none absolute inset-0 bg-vice-horizon opacity-90" />
          <div className="pointer-events-none absolute inset-0 vice-grid opacity-40" />

          <div className="relative z-10 mx-auto grid w-full max-w-4xl items-center gap-8 px-6 md:grid-cols-[0.85fr_1.15fr]">
            {/* Sliding GTA Character Card */}
            <motion.div
              initial={{ x: -40, opacity: 0, scale: 0.95 }}
              animate={{ x: 0, opacity: 1, scale: 1.03 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="clip-cut relative mx-auto w-56 overflow-hidden border-2 border-vice-pink/60 bg-vice-panel shadow-neon-pink sm:w-64"
            >
              <img
                src="/image.jpeg"
                alt={personal.name}
                className="aspect-[3/4] w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vice-bg via-transparent to-transparent" />
            </motion.div>

            {/* Title + Loading Bar */}
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.26em] text-vice-cyan">
                VICE STACK // STORY MODE
              </p>
              <h2 className="mt-2 font-display text-6xl leading-[0.9] tracking-[0.04em] text-white sm:text-7xl">
                {personal.name}
                <span className="block text-vice-gradient">SOFTWARE ENGINEER</span>
              </h2>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-vice-gold">
                {TIPS[tipIndex]}
              </p>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="mb-1.5 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em]">
                  <span className="text-vice-muted">LOADING PORTFOLIO</span>
                  <span className="text-vice-cyan">{progress}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden bg-white/10">
                  <div
                    className="h-full bg-vice-sunset transition-[width] duration-75"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={() => setVisible(false)}
                className="mt-6 border border-white/20 bg-white/5 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-vice-muted transition hover:border-vice-pink hover:text-white"
              >
                SKIP INTRO [ESC]
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
