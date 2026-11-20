import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectImage } from "@/components/work/ProjectImage";
import type { Project } from "@/content/projects";
import { site } from "@/content/site";

type ProjectCardProps = {
  project: Project;
  /** "01"–"03" on the homepage; omitted on /work. */
  number?: string;
};

/**
 * One project, as a list item. Desktop: a card (4:3 image, number, org ·
 * year, title, card line, "Read the story"). Phones: a row with an 84px
 * thumbnail. The whole card is one link to /work/<slug>.
 */
export function ProjectCard({ project, number }: ProjectCardProps) {
  const meta = `${project.org} · ${project.year}`;

  return (
    <li className="relative flex gap-4 border-b border-line py-[18px] first:pt-0 lg:flex-col lg:gap-0 lg:overflow-hidden lg:rounded-md lg:border lg:bg-surface lg:py-0 lg:first:pt-0">
      <ProjectImage
        project={project}
        variant="card"
        sizes="(min-width: 1024px) 390px, 84px"
        captionClassName="hidden lg:block"
        className="size-[84px] shrink-0 rounded-md border border-line lg:aspect-[4/3] lg:size-auto lg:w-full lg:rounded-none lg:border-0 lg:border-b"
      />

      <div className="flex min-w-0 flex-1 flex-col lg:p-6">
        <div className="flex items-baseline justify-between gap-4">
          {number && <span className="label">{number}</span>}
          <span className="ml-auto hidden text-[13px] text-muted lg:inline">{meta}</span>
        </div>

        <h3 className="mt-0.5 text-[20px] font-bold leading-tight tracking-[-0.02em] lg:mt-2 lg:text-[24px]">
          {/* Stretched link: the whole card/row is clickable. */}
          <Link
            href={`/work/${project.slug}`}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mt-1 text-[15px] leading-[1.5] text-muted lg:mt-3 lg:text-[16px] lg:leading-[1.55]">
          {project.cardLine}
        </p>

        <p className="mt-1 text-[13px] text-muted lg:hidden">{meta}</p>

        <span
          aria-hidden="true"
          className="mt-4 hidden items-center gap-2 text-[15px] text-accent lg:mt-auto lg:inline-flex lg:pt-4"
        >
          {site.selectedWork.readMore}
          <ArrowRight size={16} strokeWidth={1.75} />
        </span>
      </div>
    </li>
  );
}
