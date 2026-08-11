import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { contact, personal } from "@/lib/data";

const details = [
  { label: "Phone", value: personal.phone, href: personal.phoneHref },
  { label: "GitHub", value: `${personal.githubHandle} ↗`, href: personal.github },
  { label: "LinkedIn", value: `${personal.linkedinHandle} ↗`, href: personal.linkedin },
  { label: "Based in", value: personal.location, href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="px-side py-section-contact">
      <div className="mx-auto max-w-contact">
        <p className="mb-[18px] font-mono text-mono-2xs uppercase tracking-[.16em] text-accent">
          {contact.label}
        </p>

        <Reveal as="h2" className="mb-contact-head text-h2-contact font-medium">
          {contact.heading}
        </Reveal>

        <Reveal className="rounded-card border border-rule bg-surface p-compose-card">
          <p className="mb-3.5 font-mono text-mono-xs text-ink-faint">To: {personal.email}</p>

          <p className="text-draft text-ink">
            {contact.draftPrefix}
            <span className="text-ink-ghost">{contact.draftPlaceholder}</span>
            <span className="ml-[3px] inline-block h-[1em] w-[2px] animate-caret bg-accent align-[-2px]" />
          </p>

          <div className="mt-[26px] flex flex-wrap gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="rounded-full bg-ink px-5 py-3 font-mono text-mono-xs uppercase tracking-[.08em] text-paper hover:text-paper"
            >
              Send an email →
            </a>
            <a
              href={personal.cvUrl}
              className="rounded-full border border-ink px-5 py-3 font-mono text-mono-xs uppercase tracking-[.08em]"
            >
              Download CV
            </a>
          </div>
        </Reveal>

        <div className="mt-contact-details grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-5 border-t border-rule pt-6 font-mono text-mono-xs">
          {details.map((detail) => (
            <div key={detail.label}>
              <p className="mb-2 text-ink-ghost">{detail.label}</p>
              {detail.href ? (
                <a
                  href={detail.href}
                  {...(detail.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {detail.value}
                </a>
              ) : (
                <span>{detail.value}</span>
              )}
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </section>
  );
}
