import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/content/site";
import { features } from "@/site.config";

const textLink =
  "inline-flex min-h-11 items-center text-fg underline decoration-underline underline-offset-4 transition-colors hover:decoration-fg";

export function Contact() {
  const { contact, email, links, status } = site;
  const { whatsapp } = contact;

  // Plain text link only (no icon or chat bubble), behind features.whatsapp.
  const whatsappHref =
    features.whatsapp && whatsapp.number
      ? `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.message)}`
      : null;

  return (
    <section id="contact" aria-labelledby="contact-label" className="wrap section-space">
      <SectionLabel id="contact-label">{contact.label}</SectionLabel>

      <h3 className="type-h2">{contact.heading}</h3>

      <a
        href={`mailto:${email}`}
        className="mt-6 inline-block break-words text-[22px] leading-snug text-accent underline decoration-1 underline-offset-[5px] sm:text-[30px]"
      >
        {email}
      </a>

      <div className="mt-4 flex flex-wrap items-center gap-x-7 text-[16px]">
        <a href={links.linkedin.href} target="_blank" rel="noopener noreferrer" className={textLink}>
          {links.linkedin.label}
        </a>
        <a href={links.github.href} target="_blank" rel="noopener noreferrer" className={textLink}>
          {links.github.label}
        </a>
        {whatsappHref && (
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={textLink}>
            {whatsapp.label}
          </a>
        )}
        <span className="hidden text-muted lg:inline">{status.location}</span>
      </div>
    </section>
  );
}
