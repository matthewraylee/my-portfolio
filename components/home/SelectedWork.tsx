import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectCard } from "@/components/work/ProjectCard";
import { getFeaturedProjects } from "@/content/projects";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

const allWorkClass =
  "inline-flex min-h-11 items-center text-[15px] text-accent hover:underline";

/** The homepage three, from `featuredWork` in content/site.ts, numbered 01–03. */
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
          // Desktop: in the label row. Phones: below the rows (see the end).
          <Link
            href={selectedWork.allWork.href}
            className={cn(allWorkClass, "-mb-3 hidden lg:inline-flex")}
          >
            {allWork}
          </Link>
        }
      >
        {selectedWork.label}
      </SectionLabel>

      <ul className="lg:grid lg:grid-cols-3 lg:gap-4">
        {getFeaturedProjects().map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            number={String(i + 1).padStart(2, "0")}
          />
        ))}
      </ul>

      <Link
        href={selectedWork.allWork.href}
        className={cn(allWorkClass, "mt-4 lg:hidden")}
      >
        {allWork}
      </Link>
    </section>
  );
}
