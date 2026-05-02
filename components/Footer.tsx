import { personal } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="font-display font-bold text-sm gradient-text">
            Abdullah Al Adib
          </span>
          <span className="text-text-dim text-xs font-mono">
            © {year} · Built with Next.js & Tailwind CSS
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-dim hover:text-accent-cyan transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-dim hover:text-accent-cyan transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-text-dim hover:text-accent-cyan transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
