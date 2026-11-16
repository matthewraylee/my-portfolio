import { ButtonLink } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { education, experience } from "@/content/experience";
import { site } from "@/content/site";

// Desktop columns: years | organization | role | location
const row =
  "grid grid-cols-2 gap-x-6 gap-y-1 border-b border-line py-4 text-[16px] leading-[1.4] lg:grid-cols-[140px_minmax(0,1fr)_minmax(0,1fr)_150px] lg:gap-y-0";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-label"
      className="wrap section-space"
    >
      <SectionLabel id="experience-label" className="mb-0 lg:mb-0">
        experience
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

      <SectionLabel id="education-label" className="mt-14 mb-0 lg:mt-16 lg:mb-0">
        education
      </SectionLabel>

      <ul>
        {education.map((item) => (
          <li key={item.school} className={row}>
            <span className="order-1 col-span-2 text-[14px] text-muted lg:col-span-1 lg:text-[16px]">
              {item.year}
            </span>
            <span className="order-2 col-span-2 font-semibold text-fg lg:col-span-1">
              {item.school}
            </span>
            <span className="order-3 col-span-2 text-muted lg:col-span-1">
              {item.detail}
            </span>
          </li>
        ))}
      </ul>

      <ButtonLink href={site.resumeHref} icon="download" className="mt-8">
        download resume (pdf)
      </ButtonLink>
    </section>
  );
}
