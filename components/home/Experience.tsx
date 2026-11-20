import { ButtonLink } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { experience } from "@/content/experience";
import { site } from "@/content/site";

/**
 * Experience only (Education moved into About on Nov 15).
 * Desktop columns: years | organization | role | location.
 * Phone: "years · location", then organization, then role.
 */
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
          <li
            key={`${job.org}-${job.years}`}
            className="grid gap-y-0.5 border-b border-line py-4 text-[16px] leading-[1.4] lg:grid-cols-[140px_minmax(0,1fr)_minmax(0,1fr)_150px] lg:gap-x-6 lg:gap-y-0"
          >
            <span className="text-[14px] text-muted lg:text-[16px]">
              {job.years}
              <span className="lg:hidden"> · {job.location}</span>
            </span>
            <span className="font-semibold text-fg">{job.org}</span>
            <span className="text-muted">{job.role}</span>
            <span className="hidden text-muted lg:block">{job.location}</span>
          </li>
        ))}
      </ul>

      <ButtonLink
        href={site.resumeHref}
        icon="download"
        className="mt-8 w-full lg:w-auto"
      >
        {site.experience.resumeCta}
      </ButtonLink>
    </section>
  );
}
