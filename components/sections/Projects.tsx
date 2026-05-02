"use client";

import { useState } from "react";
import { ExternalLink, Github, Star } from "lucide-react";
import { projects } from "@/lib/data";

const categories = ["All", "Full-Stack", "Frontend", "Game"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-pad relative">
      {/* Background accent */}
      <div
        className="absolute top-1/2 right-0 w-96 h-96 opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="section-label">02 / projects</span>
          <div className="flex-1 h-px bg-gradient-to-r from-accent-cyan/30 to-transparent" />
        </div>

        <div className="mb-12">
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-text-primary mb-3">
            Things I&apos;ve{" "}
            <span className="gradient-text">shipped</span>
          </h2>
          <p className="text-text-muted max-w-xl">
            A mix of full-stack apps, APIs, and experiments. Some are serious.
            One involves shooting people.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/40"
                  : "text-text-dim border border-white/5 hover:border-white/15 hover:text-text-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <div
      className="glass-card rounded-2xl p-6 flex flex-col h-full group"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span
            className="text-2xl p-2 rounded-xl"
            style={{ background: `${project.color}15` }}
          >
            {project.icon}
          </span>
          {project.featured && (
            <span className="flex items-center gap-1 text-xs font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full">
              <Star size={10} fill="currentColor" />
              featured
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-text-dim hover:text-accent-green transition-colors"
              title="Live demo"
            >
              <ExternalLink size={16} />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-text-dim hover:text-accent-cyan transition-colors"
            title="GitHub"
          >
            <Github size={16} />
          </a>
        </div>
      </div>

      {/* Accent line */}
      <div
        className="h-0.5 w-10 rounded-full mb-4 transition-all duration-300 group-hover:w-20"
        style={{ background: project.color }}
      />

      {/* Title */}
      <h3 className="font-display font-bold text-xl text-text-primary mb-2">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-text-muted text-sm leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-md text-xs font-mono"
            style={{
              background: `${project.color}12`,
              color: project.color,
              border: `1px solid ${project.color}30`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* If has both frontend + backend repos */}
      {"githubBackend" in project && project.githubBackend && (
        <div className="flex gap-3 mt-4 pt-4 border-t border-white/5">
          <a
            href={project.githubFrontend as string}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-text-dim hover:text-accent-cyan transition-colors flex items-center gap-1"
          >
            <Github size={12} /> Frontend
          </a>
          <a
            href={project.githubBackend}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-text-dim hover:text-accent-green transition-colors flex items-center gap-1"
          >
            <Github size={12} /> Backend
          </a>
        </div>
      )}
    </div>
  );
}
