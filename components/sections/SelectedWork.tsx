import Reveal from "@/components/Reveal";
import { projects } from "@/lib/data";

export default function SelectedWork() {
  return (
    <section id="act2" className="border-t border-rule bg-paper-tint px-side py-section">
      <div className="mx-auto max-w-page">
        <p className="mb-[18px] font-mono text-mono-2xs uppercase tracking-[.16em] text-accent">
          02 — Selected work
        </p>

        <Reveal as="h2" className="mb-act-head max-w-h2-16 text-h2-act font-medium">
          Things I shipped and still stand behind.
        </Reveal>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-4">
          {projects.map((project) => (
            <Reveal
              key={project.slug}
              as="article"
              className="flex flex-col overflow-hidden rounded-card border border-rule bg-paper"
            >
              <div className="flex items-center gap-2 border-b border-rule-soft bg-surface px-[14px] py-[11px]">
                <span className="h-2 w-2 rounded-full bg-rule-chip" />
                <span className="h-2 w-2 rounded-full bg-rule-chip" />
                <span className="ml-1.5 font-mono text-mono-2xs text-ink-faint">
                  {project.slug}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-3.5 p-[22px]">
                <h3 className="text-h3-card font-medium">{project.title}</h3>
                <p className="text-card-body text-ink-soft">{project.description}</p>
                <p className="mt-auto font-mono text-mono-2xs text-ink-faint">{project.stack}</p>
                <div className="flex gap-4 font-mono text-mono-2xs tracking-[.06em]">
                  {project.links.map((link) => (
                    <a
                      key={link.href + link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-b border-rule-line pb-[3px]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
