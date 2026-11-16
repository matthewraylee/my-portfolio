import { ButtonLink } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { experience } from "@/content/experience";
import { site } from "@/content/site";

// Desktop columns: years | organization | role | location
const row =
  "grid grid-cols-2 gap-x-6 gap-y-1 border-b border-line py-4 text-[16px] leading-[1.4] lg:grid-cols-[140px_minmax(0,1fr)_minmax(0,1fr)_150px] lg:gap-y-0";

/** Experience only. Education moved into About on Nov 15. */
export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-label"
      className="wrap section-space"
    >
      <SectionLabel id="experience-label" className="mb-0 lg:mb-0">
        {site.experience.label}
      </SectionLabel>

      <ul>
        {experience.map((job) => (
          <li key={`${job.org}-${job.years}`} className={row}>
            <span className="order-1 text-[14px] text-muted lg:text-[16px]">
              {job.years}
            </span>
            <span className="order-2 text-right text-[14px] text-muted lg:order-4 lg:text-left lg:text-[16px]">
              {job.location}
            </span>
            <span className="order-3 col-span-2 font-semibold text-fg lg:order-2 lg:col-span-1">
              {job.org}
            </span>
            <span className="order-4 col-span-2 text-muted lg:order-3 lg:col-span-1">
              {job.role}
            </span>
          </li>
        ))}
      </ul>

      <ButtonLink href={site.resumeHref} icon="download" className="mt-8">
        {site.experience.resumeCta}
      </ButtonLink>
    </section>
  );
}
