import Reveal from "@/components/Reveal";
import { skillGroups, timeline } from "@/lib/data";

export default function TrackRecord() {
  return (
    <section id="act3" className="border-t border-rule px-side py-section">
      <div className="mx-auto max-w-page">
        <p className="mb-[18px] font-mono text-mono-2xs uppercase tracking-[.16em] text-accent">
          03 — Track record
        </p>

        <Reveal as="h2" className="mb-act-head max-w-h2-14 text-h2-act font-medium">
          Where the hours went.
        </Reveal>

        {timeline.map((entry, index) => (
          <Reveal
            key={entry.period}
            className={`grid grid-cols-1 gap-timeline-split border-t border-rule py-timeline-row nav:grid-cols-[minmax(0,260px)_minmax(0,1fr)] ${
              index === timeline.length - 1 ? "border-b" : ""
            }`}
          >
            <div>
              <p className="font-mono text-mono-xs tracking-[.1em] text-ink">{entry.period}</p>
              <p className="mt-1.5 font-mono text-mono-2xs uppercase tracking-[.1em] text-ink-ghost">
                {entry.type}
              </p>
            </div>

            <div>
              <h3 className="text-h3-role font-medium">
                {entry.role} <span className="text-accent">{entry.org}</span>
              </h3>

              {entry.bullets && (
                <ul className="mt-4 grid max-w-bullets list-none gap-[11px] p-0 text-bullet text-ink-soft">
                  {entry.bullets.map((bullet, i) => (
                    <li key={i} className="relative pl-[26px]">
                      <span className="absolute left-0 top-0 font-mono text-mono-xs text-ink-numeral">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              {entry.body && <p className="mt-3.5 text-ink-soft">{entry.body}</p>}
            </div>
          </Reveal>
        ))}

        <Reveal className="mt-skills-top grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-skills">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <p className="mb-4 font-mono text-mono-2xs uppercase tracking-[.14em] text-accent">
                {group.title}
              </p>
              <ul className="grid list-none gap-[9px] p-0 font-mono text-mono-sm text-ink-soft">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
