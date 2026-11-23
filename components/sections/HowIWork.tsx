"use client";

import { motion } from "framer-motion";
import { principles } from "@/lib/data";

export default function HowIWork() {
  return (
    <section id="act4" className="relative border-b border-white/10 bg-vice-panel/40 py-12 sm:py-14">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8">
        <div className="mb-7">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-vice-pink">
            MISSION 04 // NEON STRIP
          </p>
          <h2 className="mt-2 font-display text-[clamp(42px,6vw,76px)] uppercase leading-[0.94] tracking-[0.03em] text-white">
            THE STREET <span className="text-vice-gradient">CODE</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((p, idx) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="clip-cut relative overflow-hidden border border-white/15 bg-vice-bg p-7 shadow-hud-panel"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-vice-neon" />
              <span className="pointer-events-none absolute -right-2 -top-4 font-display text-[110px] leading-none text-white/[0.04]">
                {p.num}
              </span>

              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-vice-cyan">
                RULE {p.num}
              </p>
              <h3 className="mt-3 font-display text-3xl tracking-[0.04em] text-white">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-vice-muted sm:text-[15px]">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
