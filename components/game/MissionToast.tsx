"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ShieldCheck, Sparkles, Trophy } from "lucide-react";
import { useGame } from "./GameContext";

export default function MissionToast() {
  const { toast } = useGame();

  return (
    <div className="pointer-events-none fixed inset-x-0 top-24 z-[70] flex justify-center px-4">
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -32, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -24, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 360, damping: 26 }}
            className="clip-cut relative overflow-hidden border border-vice-gold/50 bg-vice-panel/95 px-6 py-4 shadow-neon-gold backdrop-blur-xl"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-vice-sunset" />
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-vice-gold/40 bg-vice-gold/10 text-vice-gold">
                {toast.tone === "cyan" ? (
                  <ShieldCheck className="h-6 w-6 text-vice-cyan" />
                ) : toast.tone === "pink" ? (
                  <Sparkles className="h-6 w-6 text-vice-pink" />
                ) : (
                  <Trophy className="h-6 w-6 text-vice-gold" />
                )}
              </div>
              <div>
                <p className="font-display text-2xl leading-none tracking-[0.08em] text-vice-gold">
                  {toast.title}
                </p>
                <p className="mt-1 font-mono text-xs text-vice-muted">
                  {toast.subtitle}
                </p>
              </div>
              <div className="ml-2 border-l border-white/10 pl-4 text-right">
                <span className="block font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-vice-green">
                  {toast.reward}
                </span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.12em] text-vice-dim">
                  RESPECT UP
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
