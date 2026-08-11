import Reveal from "@/components/Reveal";
import { principles } from "@/lib/data";

export default function HowIWork() {
  return (
    <section
      id="act4"
      className="border-t border-rule bg-ink px-side py-section text-paper-tint"
    >
      <div className="mx-auto max-w-page">
        <p className="mb-[18px] font-mono text-mono-2xs uppercase tracking-[.16em] text-accent">
          04 — How I work
        </p>

        <Reveal
          as="h2"
          className="mb-act-head max-w-h2-15 text-h2-act font-medium text-paper-tint"
        >
          Understand it, then make it boring.
        </Reveal>

        {/* Same hairline-grid technique as the hero metrics, inverted. */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-px border border-ink-rule bg-ink-rule">
          {principles.map((principle) => (
            <Reveal key={principle.num} className="bg-ink p-act-card">
              <p className="mb-[18px] font-mono text-mono-xs text-accent">{principle.num}</p>
              <h3 className="mb-3 text-h3-dark font-medium">{principle.title}</h3>
              <p className="text-card-body text-ink-body">{principle.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
