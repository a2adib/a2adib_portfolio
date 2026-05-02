"use client";

import { Mail, Github, Linkedin, MapPin, Copy, CheckCheck } from "lucide-react";
import { personal } from "@/lib/data";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/a2adib",
      href: personal.github,
      color: "#F0F4FF",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Abdullah Al Adib",
      href: personal.linkedin,
      color: "#0A66C2",
    },
    {
      icon: MapPin,
      label: "Location",
      value: personal.location,
      href: null,
      color: "#00FF94",
    },
  ];

  return (
    <section id="contact" className="section-pad relative">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px opacity-20"
        style={{
          background:
            "linear-gradient(90deg, transparent, #00D4FF, transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="section-label">05 / contact</span>
          <div className="flex-1 h-px bg-gradient-to-r from-accent-cyan/30 to-transparent" />
        </div>

        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="font-display font-bold text-4xl sm:text-6xl text-text-primary mb-4">
            Let&apos;s{" "}
            <span className="gradient-text">build something</span>
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            Open to backend roles, freelance API work, or just a conversation
            about tech. I reply fast.
          </p>
        </div>

        {/* Email CTA */}
        <div className="flex justify-center mb-12">
          <div className="glass-card rounded-2xl p-8 text-center max-w-md w-full glow-cyan">
            <Mail size={28} className="text-accent-cyan mx-auto mb-4" />
            <p className="text-text-muted text-sm font-mono mb-3">reach me at</p>
            <p className="font-display font-bold text-xl text-text-primary mb-5">
              {personal.email}
            </p>
            <div className="flex gap-3 justify-center">
              <a
                href={`mailto:${personal.email}`}
                className="btn-primary px-6 py-2.5 text-sm font-semibold"
              >
                Send Email
              </a>
              <button
                onClick={copyEmail}
                className="btn-outline px-4 py-2.5 text-sm flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <CheckCheck size={14} className="text-accent-green" />
                    <span className="text-accent-green">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Other links */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {contactLinks.map((link) => (
            <div key={link.label} className="glass-card rounded-xl p-5 text-center">
              <link.icon
                size={20}
                className="mx-auto mb-3"
                style={{ color: link.color }}
              />
              <p className="text-text-dim text-xs font-mono mb-1">{link.label}</p>
              {link.href ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted text-sm hover:text-accent-cyan transition-colors font-medium"
                >
                  {link.value}
                </a>
              ) : (
                <p className="text-text-muted text-sm">{link.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
