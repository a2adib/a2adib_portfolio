import { contact } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-vice-dim">
      <span>{contact.copyright}</span>
      <span className="text-vice-pink/80">VICE STACK // BUILT FOR ZERO DOWNTIME</span>
    </footer>
  );
}
