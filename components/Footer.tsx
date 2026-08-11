import { contact } from "@/lib/data";

export default function Footer() {
  return (
    <p className="mt-contact-footer font-mono text-mono-2xs tracking-[.1em] text-ink-ghost">
      {contact.copyright}
    </p>
  );
}
