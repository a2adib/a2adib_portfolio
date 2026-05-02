"use client";

import { personal, education } from "@/lib/data";
import { MapPin, GraduationCap, Code2, Briefcase } from "lucide-react";

const stats = [
  { label: "Years Coding", value: "4+" },
  { label: "Projects Built", value: "10+" },
  { label: "APIs Shipped", value: "∞" },
  { label: "Coffees", value: "∞" },
];

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="section-label">01 / about</span>
          <div className="flex-1 h-px bg-gradient-to-r from-accent-cyan/30 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — story */}
          <div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-text-primary mb-6 leading-tight">
              Building things that{" "}
              <span className="gradient-text">actually work</span>
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>{personal.bio}</p>
              <p>
                Before going full-time into backend development, I co-founded an
                educational platform called Backloggers, where I learned that
                building a product is as much about people and operations as it
                is about code.
              </p>
              <p>
                Right now I'm deep in backend work at Govaly Ltd — writing
                APIs, untangling legacy systems, and slowly becoming the kind of
                developer who actually reads error logs before panicking.
              </p>
            </div>

            {/* Location + status */}
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="flex items-center gap-2 text-sm font-mono text-text-dim">
                <MapPin size={14} className="text-accent-cyan" />
                {personal.location}
              </span>
              <span className="flex items-center gap-2 text-sm font-mono text-accent-green">
                <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                Open to new roles
              </span>
            </div>
          </div>

          {/* Right — cards */}
          <div className="space-y-4">
            {/* Education card */}
            {education.map((edu) => (
              <div key={edu.degree} className="glass-card rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent-cyan/10 flex-shrink-0">
                    <GraduationCap size={20} className="text-accent-cyan" />
                  </div>
                  <div>
                    <p className="text-text-primary font-semibold">{edu.degree}</p>
                    <p className="text-text-muted text-sm mt-0.5">{edu.institution}</p>
                    <p className="text-text-dim text-xs font-mono mt-1">
                      {edu.period} · CGPA {edu.gpa}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Current role card */}
            <div className="glass-card rounded-xl p-5">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-accent-green/10 flex-shrink-0">
                  <Briefcase size={20} className="text-accent-green" />
                </div>
                <div>
                  <p className="text-text-primary font-semibold">Junior Backend Developer</p>
                  <p className="text-text-muted text-sm mt-0.5">Govaly Ltd.</p>
                  <p className="text-text-dim text-xs font-mono mt-1">Jan 2025 – Present</p>
                </div>
              </div>
            </div>

            {/* Code focus card */}
            <div className="glass-card rounded-xl p-5">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-purple-500/10 flex-shrink-0">
                  <Code2 size={20} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-text-primary font-semibold">Primary Stack</p>
                  <p className="font-mono text-sm text-accent-cyan mt-1">
                    Node.js · JavaScript · Python · REST APIs
                  </p>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-3 mt-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl p-4 text-center"
                >
                  <p className="font-display font-bold text-2xl gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-text-dim text-xs font-mono mt-1 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
