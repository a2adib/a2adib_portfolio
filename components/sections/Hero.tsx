import Counter from "@/components/Counter";
import { metrics, personal } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center px-side pb-[60px] pt-[120px]"
    >
      <p className="mb-hero-eyebrow animate-rise-eyebrow font-mono text-mono-xs uppercase tracking-[.16em] text-ink-mute">
        {personal.eyebrow}
      </p>

      <h1 className="max-w-h1 animate-rise-h1 text-h1 font-medium">
        APIs that don’t break
        <br />
        at <span className="text-accent">3&nbsp;AM</span>.
      </h1>

      <div className="mt-hero-split grid grid-cols-1 items-end gap-hero-split nav:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
        <p className="max-w-intro animate-rise-intro text-lead text-ink-soft">{personal.intro}</p>

        {/* Hairline grid: 1px gaps over a rule-coloured backdrop. */}
        <div className="grid animate-rise-metrics grid-cols-2 gap-px border border-rule bg-rule">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-paper px-5 py-[18px]">
              <p className="text-metric font-medium">
                <Counter value={metric.value} suffix={metric.suffix} />
              </p>
              <p className="mt-1 font-mono text-mono-3xs uppercase tracking-[.12em] text-ink-mute">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-hero-cue animate-drift font-mono text-mono-2xs uppercase tracking-[.2em] text-ink-ghost">
        Scroll ↓
      </p>
    </section>
  );
}
