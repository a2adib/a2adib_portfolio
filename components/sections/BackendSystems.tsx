import Reveal from "@/components/Reveal";
import { backendAct } from "@/lib/data";

const { chips, codeFile, dataIntegrity, responseTime } = backendAct;

export default function BackendSystems() {
  return (
    <section id="act1" className="border-t border-rule px-side py-section">
      <div className="mx-auto grid max-w-page grid-cols-1 items-start gap-act-split nav:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        {/* Left column holds position while the panels on the right scroll past. */}
        <div className="static nav:sticky nav:top-[110px]">
          <p className="mb-[18px] font-mono text-mono-2xs uppercase tracking-[.16em] text-accent">
            {backendAct.label}
          </p>

          <Reveal as="h2" className="mb-[22px] max-w-h2-13 text-h2-act font-medium">
            {backendAct.heading}
          </Reveal>

          <Reveal as="p" className="max-w-prose text-ink-soft">
            {backendAct.body}
          </Reveal>

          <Reveal className="mt-7 flex flex-wrap gap-2 font-mono text-mono-2xs text-ink-soft">
            {chips.map((chip) => (
              <span key={chip} className="rounded-full border border-rule-chip px-3 py-1.5">
                {chip}
              </span>
            ))}
          </Reveal>
        </div>

        <div className="grid gap-4">
          {/* Code panel — before/after of the same aggregation. */}
          <Reveal className="overflow-hidden rounded-panel border border-rule bg-surface">
            <div className="flex items-center gap-2 border-b border-rule-soft bg-surface-alt px-[14px] py-[11px]">
              <span className="h-[9px] w-[9px] rounded-full bg-rule-chip" />
              <span className="h-[9px] w-[9px] rounded-full bg-rule-chip" />
              <span className="h-[9px] w-[9px] rounded-full bg-rule-chip" />
              <span className="ml-2 font-mono text-mono-2xs text-ink-faint">{codeFile}</span>
              <span className="ml-auto font-mono text-mono-3xs uppercase tracking-[.1em] text-accent">
                async
              </span>
            </div>
            <pre className="overflow-x-auto p-[18px] font-mono text-code text-ink-soft">
              <span className="text-ink-ghost"># before — blocking, one row at a time</span>
              {"\n"}
              <span className="text-accent">for</span> job{" "}
              <span className="text-accent">in</span> jobs: totals[job.id] = db.query(...)
              {"\n\n"}
              <span className="text-ink-ghost"># after — one query, grouped in Python</span>
              {"\n"}
              rows = <span className="text-accent">await</span> session.execute(select(Ledger)...)
              {"\n"}
              totals = {"{"}k: sum(r.amount <span className="text-accent">for</span> r{" "}
              <span className="text-accent">in</span> g)
              {"\n"}
              {"          "}
              <span className="text-accent">for</span> k, g{" "}
              <span className="text-accent">in</span> groupby(rows, key=by_job){"}"}
            </pre>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 nav:grid-cols-2">
            <Reveal className="rounded-panel border border-rule bg-surface p-5">
              <p className="mb-2.5 font-mono text-mono-3xs uppercase tracking-[.14em] text-ink-faint">
                {responseTime.label}
              </p>
              <div className="flex h-24 items-end gap-3">
                <div className="flex h-full flex-1 flex-col justify-end">
                  <div className="h-full rounded-t-[4px] bg-rule" />
                  <p className="mt-2 font-mono text-mono-2xs text-ink-faint">
                    {responseTime.before}
                  </p>
                </div>
                <div className="flex h-full flex-1 flex-col justify-end">
                  <div className="h-[60%] rounded-t-[4px] bg-accent" />
                  <p className="mt-2 font-mono text-mono-2xs text-ink">{responseTime.after}</p>
                </div>
              </div>
              <p className="mt-3.5 text-caption text-ink-soft">{responseTime.caption}</p>
            </Reveal>

            <Reveal className="rounded-panel border border-rule bg-surface p-5">
              <p className="mb-2.5 font-mono text-mono-3xs uppercase tracking-[.14em] text-ink-faint">
                {dataIntegrity.label}
              </p>
              <ul className="grid list-none gap-[9px] p-0 font-mono text-mono-xs text-ink-soft">
                {dataIntegrity.lines.map((line, i) => (
                  <li key={i}>
                    <span className={line.ok ? "text-positive" : "text-accent"}>
                      {line.ok ? "✓" : "✕"}
                    </span>{" "}
                    {line.text}
                  </li>
                ))}
              </ul>
              <p className="mt-3.5 text-caption text-ink-soft">{dataIntegrity.caption}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
