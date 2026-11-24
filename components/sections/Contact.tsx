"use client";

import { useState } from "react";
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Copy,
  Download,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Radio,
  Send,
} from "lucide-react";
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
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("Mission Brief — Software Engineering");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [feedback, setFeedback] = useState("");
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    playClick();
    setStatus("sending");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email: senderEmail,
          subject,
          message,
          website,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        setFeedback(data.error || "Could not send message. Try the Email App button below.");
        return;
      }

      setStatus("sent");
      setFeedback(`Message sent to ${personal.email}. I'll get back to you soon.`);
      setName("");
      setSenderEmail("");
      setMessage("");
      triggerMission(
        "transmit-comms",
        "TRANSMISSION DELIVERED",
        `Message delivered to ${personal.email}`,
        "+300 RESPECT",
        "gold"
      );
    } catch {
      setStatus("error");
      setFeedback("Network error while sending. You can also use the Email App button below.");
    }
  };

  const mailtoHref = `mailto:${personal.email}?subject=${encodeURIComponent(
    subject || "Mission Brief — Software Engineering"
  )}&body=${encodeURIComponent(message || `${contact.draftPrefix}we need a software engineer.`)}`;

  return (
    <section id="contact" className="relative py-12 sm:py-14">
      <div className="mx-auto max-w-[1060px] px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-vice-cyan">
          MISSION 05 // SAFEHOUSE COMMS
        </p>

        <h2 className="mt-2 font-display text-[clamp(44px,6.5vw,84px)] uppercase leading-[0.92] tracking-[0.03em] text-white">
          {contact.heading}
        </h2>

        {/* Working Contact Form Terminal */}
        <form
          onSubmit={handleSubmit}
          className="clip-cut mt-7 border border-vice-pink/40 bg-vice-panel p-6 shadow-neon-pink sm:p-8"
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 font-mono text-xs">
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

          {/* Hidden honeypot for spam protection */}
          <input
            type="text"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-vice-muted"
              >
                Your Name *
              </label>
              <input
                id="contact-name"
                type="text"
                required
                minLength={2}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex Mercer"
                className="w-full border border-white/10 bg-vice-bg/90 px-4 py-3 text-sm text-white outline-none transition placeholder:text-vice-dim focus:border-vice-cyan"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-vice-muted"
              >
                Your Email *
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full border border-white/10 bg-vice-bg/90 px-4 py-3 text-sm text-white outline-none transition placeholder:text-vice-dim focus:border-vice-cyan"
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="contact-subject"
              className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-vice-muted"
            >
              Subject
            </label>
            <input
              id="contact-subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Project inquiry / Hiring / Collaboration"
              className="w-full border border-white/10 bg-vice-bg/90 px-4 py-3 text-sm text-white outline-none transition placeholder:text-vice-dim focus:border-vice-cyan"
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="mission-brief"
              className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-vice-muted"
            >
              Mission Brief *
            </label>
            <textarea
              id="mission-brief"
              rows={4}
              required
              minLength={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about the role, project, or system you're building..."
              className="w-full resize-none border border-white/10 bg-vice-bg/90 p-4 font-sans text-base text-white outline-none transition placeholder:text-vice-dim focus:border-vice-cyan"
            />
          </div>

          {/* Delivery Status Banner */}
          {status === "sent" && (
            <div className="mt-4 flex items-center gap-2.5 border border-vice-green/40 bg-vice-green/10 px-4 py-3 font-mono text-xs text-vice-green">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>{feedback}</span>
            </div>
          )}

          {status === "error" && (
            <div className="mt-4 flex items-center gap-2.5 border border-vice-red/40 bg-vice-red/10 px-4 py-3 font-mono text-xs text-vice-red">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{feedback}</span>
            </div>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-3.5">
            <button
              type="submit"
              disabled={status === "sending"}
              className="clip-cut-sm inline-flex items-center gap-2 bg-vice-sunset px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-vice-bg shadow-neon-pink transition hover:brightness-110 disabled:opacity-60"
            >
              {status === "sending" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              <span>{status === "sending" ? "TRANSMITTING..." : "SEND MESSAGE →"}</span>
            </button>

            <a
              href={personal.cvUrl}
              download="CV_of_Abdullah_Al_Adib.pdf"
              onClick={() =>
                triggerMission(
                  "cv-downloaded",
                  "DOSSIER DOWNLOADED",
                  "CV_of_Abdullah_Al_Adib.pdf saved",
                  "+150 XP",
                  "cyan"
                )
              }
              className="clip-cut-sm inline-flex items-center gap-2 border border-vice-cyan/50 bg-vice-cyan/10 px-5 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-vice-cyan transition hover:bg-vice-cyan hover:text-vice-bg"
            >
              <Download className="h-4 w-4" />
              <span>DOWNLOAD CV</span>
            </a>

            <a
              href={mailtoHref}
              onClick={() => playClick()}
              className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-4 py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-vice-muted transition hover:border-vice-gold hover:text-vice-gold"
            >
              <Mail className="h-4 w-4" />
              <span>OPEN EMAIL APP</span>
            </a>
          </div>
        </form>

        {/* Direct Channel Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
