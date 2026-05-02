"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/lib/data";

const typewriterPhrases = [
  "Backend Developer",
  "REST API Engineer",
  "Node.js Enthusiast",
  "Problem Solver",
];

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = typewriterPhrases[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx));
        setCharIdx((c) => c + 1);
        if (charIdx === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        }
      }, 80);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx));
        setCharIdx((c) => c - 1);
        if (charIdx === 0) {
          setDeleting(false);
          setPhraseIdx((p) => (p + 1) % typewriterPhrases.length);
        }
      }, 40);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx]);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Floating orbs */}
      <div
        className="orb w-96 h-96 opacity-20"
        style={{
          background: "radial-gradient(circle, #00D4FF 0%, transparent 70%)",
          top: "10%",
          right: "-5%",
          animationDelay: "0s",
        }}
      />
      <div
        className="orb w-72 h-72 opacity-15"
        style={{
          background: "radial-gradient(circle, #00FF94 0%, transparent 70%)",
          bottom: "15%",
          left: "-5%",
          animationDelay: "3s",
        }}
      />
      <div
        className="orb w-48 h-48 opacity-10"
        style={{
          background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
          top: "50%",
          left: "40%",
          animationDelay: "5s",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24">
        <div className="max-w-4xl">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-accent-green/30 bg-accent-green/5">
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
            <span className="font-mono text-xs text-accent-green tracking-widest uppercase">
              Available for opportunities
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-display font-bold leading-none mb-4">
            <span className="block text-5xl sm:text-7xl lg:text-8xl text-text-primary mb-2">
              Abdullah
            </span>
            <span className="block text-5xl sm:text-7xl lg:text-8xl gradient-text text-glow-cyan">
              Al Adib
            </span>
          </h1>

          {/* Typewriter subtitle */}
          <div className="mt-6 mb-4 flex items-center gap-2">
            <span className="font-mono text-sm text-text-dim mr-1">~$</span>
            <span className="font-mono text-xl sm:text-2xl text-accent-cyan">
              {displayed}
              <span className="cursor" />
            </span>
          </div>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-text-muted font-display mt-4 mb-10 max-w-2xl leading-relaxed">
            {personal.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={scrollToProjects}
              className="btn-primary px-8 py-3 text-base font-semibold"
            >
              View Projects
            </button>
            <button
              onClick={scrollToContact}
              className="btn-outline px-8 py-3 text-base"
            >
              Contact Me
            </button>
            <a
              href={personal.cvUrl}
              download
              className="btn-outline px-8 py-3 text-base flex items-center gap-2"
            >
              <span>↓</span> Download CV
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-dim hover:text-accent-cyan transition-colors duration-200 flex items-center gap-2 text-sm font-mono"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-dim hover:text-accent-cyan transition-colors duration-200 flex items-center gap-2 text-sm font-mono"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-text-dim hover:text-accent-cyan transition-colors duration-200 flex items-center gap-2 text-sm font-mono"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
          <span className="font-mono text-xs text-text-dim tracking-widest uppercase">scroll</span>
          <ArrowDown size={16} className="text-accent-cyan" />
        </div>
      </div>
    </section>
  );
}
