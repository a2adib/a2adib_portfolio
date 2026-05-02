"use client";

import { useEffect, useRef, useState } from "react";
import { skills } from "@/lib/data";

const categoryColors: Record<string, string> = {
  Backend: "#00D4FF",
  Frontend: "#00FF94",
  "Tools & DevOps": "#7C3AED",
};

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-pad relative" ref={ref}>
      <div
        className="absolute bottom-0 left-0 w-80 h-80 opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #00FF94 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="section-label">03 / skills</span>
          <div className="flex-1 h-px bg-gradient-to-r from-accent-cyan/30 to-transparent" />
        </div>

        <h2 className="font-display font-bold text-4xl sm:text-5xl text-text-primary mb-3">
          Tools of the{" "}
          <span className="gradient-text">trade</span>
        </h2>
        <p className="text-text-muted mb-14 max-w-xl">
          What I reach for when building. Numbers reflect real-world comfort, not
          imaginary confidence.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="glass-card rounded-2xl p-6">
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-1 h-8 rounded-full"
                  style={{ background: categoryColors[category] }}
                />
                <h3 className="font-display font-bold text-lg text-text-primary">
                  {category}
                </h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-5">
                {items.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="font-mono text-sm text-text-muted">
                        {skill.name}
                      </span>
                      <span
                        className="font-mono text-xs"
                        style={{ color: categoryColors[category] }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    {/* Track */}
                    <div className="w-full h-0.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: visible ? `${skill.level}%` : "0%",
                          background: `linear-gradient(90deg, ${categoryColors[category]}, ${
                            category === "Backend"
                              ? "#00FF94"
                              : category === "Frontend"
                              ? "#00D4FF"
                              : "#00D4FF"
                          })`,
                          transitionDelay: `${i * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="mt-12">
          <p className="section-label mb-6">also comfortable with</p>
          <div className="flex flex-wrap gap-2">
            {[
              "Git", "GitHub", "REST APIs", "Express.js", "Tailwind CSS",
              "Postman", "Linux", "VS Code", "npm", "JSON", "Bash",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-xs font-mono text-text-dim border border-white/5 hover:border-accent-cyan/20 hover:text-text-muted transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
