import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectCard } from "@/components/work/ProjectCard";
import { TagFilter } from "@/components/work/TagFilter";
import { getPublishedProjects } from "@/content/projects";
import { site } from "@/content/site";
import { isTagId, tags } from "@/content/tags";

export const metadata: Metadata = {
  title: "All work · Matthew Ray Lee",
  description: site.work.heading,
};

type WorkPageProps = {
  // Next.js 15: searchParams is a Promise.
  searchParams: Promise<{ tag?: string | string[] }>;
};

export default async function WorkPage({ searchParams }: WorkPageProps) {
  const { tag } = await searchParams;
  const projects = getPublishedProjects();

  // Chips: tags used by at least one published project, in tag-list order.
  const usedTags = tags.filter((t) => projects.some((p) => p.tags.includes(t.id)));

  // An unknown (or unused) tag shows everything.
  const active =
    typeof tag === "string" && isTagId(tag) && usedTags.some((t) => t.id === tag)
      ? tag
      : null;
  const shown = active ? projects.filter((p) => p.tags.includes(active)) : projects;

  return (
    <section aria-labelledby="work-heading" className="wrap section-space pt-12 lg:pt-20">
      <SectionLabel as="p">{site.work.label}</SectionLabel>
      <h1 id="work-heading" className="type-h2 max-w-[820px]">
        {site.work.heading}
      </h1>

      <div className="mt-8 lg:mt-10">
        <TagFilter tags={usedTags} active={active} />
      </div>

      <ul className="mt-8 lg:mt-10 lg:grid lg:grid-cols-3 lg:gap-4">
        {shown.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </ul>

      <a
        href={site.edition.previous.href}
        className="mt-12 inline-flex min-h-11 items-center text-[15px] text-muted underline decoration-underline underline-offset-4 transition-colors hover:text-fg hover:decoration-fg lg:mt-16"
      >
        {site.edition.previous.label}&nbsp;→
      </a>
    </section>
  );
}
