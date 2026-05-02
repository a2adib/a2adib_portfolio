"use client";

import { experience } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #00D4FF 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="section-label">04 / experience</span>
          <div className="flex-1 h-px bg-gradient-to-r from-accent-cyan/30 to-transparent" />
        </div>

        <h2 className="font-display font-bold text-4xl sm:text-5xl text-text-primary mb-14">
          Where I&apos;ve{" "}
          <span className="gradient-text">worked</span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[5px] top-3 bottom-0 w-px bg-gradient-to-b from-accent-cyan/50 via-accent-cyan/20 to-transparent" />

          <div className="space-y-12">
            {experience.map((exp, i) => (
              <div key={i} className="relative pl-10">
                {/* Dot */}
                <div className="timeline-dot absolute left-0 top-2" />

                <div className="glass-card rounded-2xl p-6 sm:p-8">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="font-display font-bold text-xl text-text-primary">
                        {exp.title}
                      </h3>
                      <p className="text-accent-cyan font-mono text-sm mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="font-mono text-sm text-text-dim">
                        {exp.period}
                      </span>
                      <span
                        className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                          exp.type === "Full-time"
                            ? "bg-accent-green/10 text-accent-green border border-accent-green/20"
                            : "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                        }`}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/5 my-4" />

                  {/* Bullets */}
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2
                          size={16}
                          className="text-accent-cyan flex-shrink-0 mt-0.5"
                        />
                        <span className="text-text-muted text-sm leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteering */}
        <div className="mt-16 glass-card rounded-2xl p-6 sm:p-8">
          <h3 className="font-display font-bold text-xl text-text-primary mb-6">
            Volunteering & Community
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                org: "PUC Computer Club",
                role: "General Member",
                icon: "💻",
              },
              {
                org: "Cancer Rogi O Swajan Samaj Foundation",
                role: "Volunteer",
                icon: "🤝",
              },
            ].map((v) => (
              <div
                key={v.org}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/3 border border-white/5"
              >
                <span className="text-2xl">{v.icon}</span>
                <div>
                  <p className="text-text-primary text-sm font-semibold">{v.org}</p>
                  <p className="text-text-dim text-xs font-mono mt-0.5">{v.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
