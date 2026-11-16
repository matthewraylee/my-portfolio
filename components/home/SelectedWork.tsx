import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Placeholder } from "@/components/ui/Placeholder";
import { featuredProjects } from "@/content/projects";
import { site } from "@/content/site";

const allWorkClass =
  "inline-flex min-h-11 items-center text-[15px] text-accent hover:underline";

export function SelectedWork() {
  const { selectedWork } = site;
  const allWork = (
    <>
      {selectedWork.allWork.label}&nbsp;→
    </>
  );

  return (
    <section id="work" aria-labelledby="work-label" className="wrap section-space">
      <SectionLabel
        id="work-label"
        aside={
          // Desktop: in the label row. Mobile: below the rows (see the end).
          <Link
            href={selectedWork.allWork.href}
            className={`${allWorkClass} -mb-3 hidden lg:inline-flex`}
          >
            {allWork}
          </Link>
        }
      >
        {selectedWork.label}
      </SectionLabel>

      {/* Mobile: rows with an 84px thumbnail. Desktop: three cards. */}
      <ul className="lg:grid lg:grid-cols-3 lg:gap-4">
        {featuredProjects.map((project, i) => {
          const number = String(i + 1).padStart(2, "0");
          const meta = `${project.org} · ${project.year}`;

          return (
            <li
              key={project.slug}
              className="relative flex gap-4 border-b border-line py-5 first:pt-0 lg:flex-col lg:gap-0 lg:overflow-hidden lg:rounded-md lg:border lg:bg-surface lg:py-0 lg:first:pt-0"
            >
              <Placeholder
                alt={project.alt}
                caption={project.placeholder}
                captionClassName="hidden lg:block"
                className="size-[84px] shrink-0 rounded-md border border-line lg:aspect-[4/3] lg:size-auto lg:w-full lg:rounded-none lg:border-0 lg:border-b"
              />

              <div className="flex min-w-0 flex-1 flex-col lg:p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="label">{number}</span>
                  <span className="hidden text-[13px] text-muted lg:inline">
                    {meta}
                  </span>
                </div>

                <h3 className="mt-1 text-[20px] font-bold leading-tight tracking-[-0.02em] lg:mt-2 lg:text-[26px]">
                  {/* Stretched link: the whole card/row is clickable. */}
                  <Link
                    href={`/work/${project.slug}`}
                    className="after:absolute after:inset-0 after:content-['']"
                  >
                    {project.title}
                  </Link>
                </h3>

                <p className="mt-1.5 text-[15px] leading-[1.55] text-muted lg:mt-3 lg:text-[16px]">
                  {project.summary}
                </p>

                <p className="mt-2 text-[13px] text-muted lg:hidden">{meta}</p>

                <span
                  aria-hidden="true"
                  className="mt-4 hidden items-center gap-2 text-[15px] text-accent lg:inline-flex"
                >
                  {selectedWork.readMore}
                  <ArrowRight size={16} strokeWidth={1.75} />
                </span>
              </div>
            </li>
          );
        })}
      </ul>

      <Link
        href={selectedWork.allWork.href}
        className={`${allWorkClass} mt-4 lg:hidden`}
      >
        {allWork}
      </Link>
    </section>
  );
}
