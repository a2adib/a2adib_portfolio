"use client";

import { useState } from "react";
import { Check, Copy, Download, Mail, MapPin, Phone, Radio, Send } from "lucide-react";
import Footer from "@/components/Footer";
import { contact, personal } from "@/lib/data";
import { useGame } from "@/components/game/GameContext";

const commsChannels = [
  { label: "DIRECT LINE", value: personal.phone, href: personal.phoneHref, icon: Phone },
  { label: "GITHUB", value: `${personal.githubHandle} ↗`, href: personal.github, icon: Radio },
  { label: "LINKEDIN", value: `${personal.linkedinHandle} ↗`, href: personal.linkedin, icon: Radio },
  { label: "BASE HQ", value: personal.location, href: null, icon: MapPin },
];

export default function Contact() {
  const [message, setMessage] = useState(
    `${contact.draftPrefix}we need a software engineer to build and scale our product.`
  );
  const [copied, setCopied] = useState(false);
  const { triggerMission, playClick } = useGame();

  const handleCopyEmail = async () => {
    playClick();
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      triggerMission(
        "comms-locked",
        "CONTACT ACQUIRED",
        `Copied ${personal.email} to clipboard`,
        "+250 RESPECT",
        "gold"
      );
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard fallback ignored
    }
  };

  const mailtoHref = `mailto:${personal.email}?subject=${encodeURIComponent(
    "Mission Brief — Software Engineering"
  )}&body=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="relative py-12 sm:py-14">
      <div className="mx-auto max-w-[1060px] px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-vice-cyan">
          MISSION 05 // SAFEHOUSE COMMS
        </p>

        <h2 className="mt-2 font-display text-[clamp(44px,6.5vw,84px)] uppercase leading-[0.92] tracking-[0.03em] text-white">
          {contact.heading}
        </h2>

        {/* Interactive Burner Phone / Safehouse Comms Terminal */}
        <div className="clip-cut mt-8 border border-vice-pink/40 bg-vice-panel p-6 shadow-neon-pink sm:p-8">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-vice-cyan">
              <Mail className="h-4 w-4" />
              <span>TO: {personal.email}</span>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-vice-gold transition hover:border-vice-gold"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-vice-green" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? "COPIED" : "COPY EMAIL"}</span>
            </button>
          </div>

          <label htmlFor="mission-brief" className="sr-only">
            Mission brief message
          </label>
          <textarea
            id="mission-brief"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full resize-none border border-white/10 bg-vice-bg/90 p-4 font-sans text-lg text-white outline-none transition focus:border-vice-cyan"
          />

          <div className="mt-6 flex flex-wrap items-center gap-3.5">
            <a
              href={mailtoHref}
              onClick={() =>
                triggerMission(
                  "transmit-comms",
                  "TRANSMISSION SENT",
                  "Opening encrypted email channel to Abdullah",
                  "+300 RESPECT",
                  "gold"
                )
              }
              className="clip-cut-sm inline-flex items-center gap-2 bg-vice-sunset px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-vice-bg shadow-neon-pink transition hover:brightness-110"
            >
              <Send className="h-4 w-4" />
              <span>TRANSMIT BRIEF →</span>
            </a>

            <a
              href={personal.cvUrl}
              onClick={() => playClick()}
              className="clip-cut-sm inline-flex items-center gap-2 border border-vice-cyan/50 bg-vice-cyan/10 px-5 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-vice-cyan transition hover:bg-vice-cyan hover:text-vice-bg"
            >
              <Download className="h-4 w-4" />
              <span>DOWNLOAD CV</span>
            </a>
          </div>
        </div>

        {/* Direct Channel Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {commsChannels.map((detail) => {
            const Icon = detail.icon;
            return (
              <div
                key={detail.label}
                className="border border-white/10 bg-vice-panel/70 p-4 font-mono text-xs"
              >
                <p className="mb-2 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-vice-dim">
                  <Icon className="h-3.5 w-3.5 text-vice-pink" />
                  {detail.label}
                </p>
                {detail.href ? (
                  <a
                    href={detail.href}
                    {...(detail.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-vice-text transition hover:text-vice-cyan"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <span className="text-vice-text">{detail.value}</span>
                )}
              </div>
            );
          })}
        </div>

        <Footer />
      </div>
    </section>
  );
}
