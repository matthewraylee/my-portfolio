import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { ProjectImage } from "@/components/work/ProjectImage";
import { getNextProject, getProject, getPublishedProjects } from "@/content/projects";
import { site } from "@/content/site";

// Only published projects get pages; anything else is the 404 page.
export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedProjects().map((project) => ({ slug: project.slug }));
}

type ProjectPageProps = {
  // Next.js 15: params is a Promise.
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} · Matthew Ray Lee`,
    description: project.summary,
  };
}

const sectionHeading =
  "text-[20px] font-bold leading-tight tracking-[-0.02em] lg:text-[24px]";
const body = "text-[17px] leading-[1.6] text-fg lg:text-[18px]";

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = getNextProject(project.slug);
  const { work } = site;

  const specRows = [
    { term: work.spec.role, value: project.spec.role },
    { term: work.spec.tools, value: project.spec.tools.join(" · ") },
    { term: work.spec.year, value: project.year },
    { term: work.spec.result, value: project.spec.result },
    ...(project.spec.team ? [{ term: work.spec.team, value: project.spec.team }] : []),
  ];

  return (
    <article aria-labelledby="project-title" className="wrap section-space pt-8 lg:pt-14">
      <div className="max-w-[800px]">
        <Link
          href="/work"
          className="-ml-0.5 inline-flex min-h-11 items-center gap-2 text-[15px] text-accent hover:underline"
        >
          <ArrowLeft size={16} strokeWidth={1.75} aria-hidden="true" />
          {work.backLink}
        </Link>

        {/* Header: org · year, the title (section-headline size, no chrome), the summary */}
        <p className="label mt-8 lg:mt-12">
          {project.org} · {project.year}
        </p>
        <h1 id="project-title" className="type-h2 mt-3">
          {project.title}
        </h1>
        <p className="mt-6 text-[19px] leading-[1.45] tracking-[-0.01em] text-fg lg:mt-8 lg:text-[24px] lg:leading-[1.4]">
          {project.summary}
        </p>

        {/* Spec table */}
        <dl className="mt-10 border-t border-line lg:mt-12">
          {specRows.map((row) => (
            <div
              key={row.term}
              className="grid gap-1 border-b border-line py-3.5 lg:grid-cols-[120px_minmax(0,1fr)] lg:gap-6 lg:py-4"
            >
              <dt className="label pt-0.5">{row.term}</dt>
              <dd className="text-[16px] leading-[1.5] text-fg">{row.value}</dd>
            </div>
          ))}
        </dl>

        {/* The image (4:3), or the placeholder until it exists */}
        <ProjectImage
          project={project}
          sizes="(min-width: 848px) 800px, 100vw"
          priority
          className="mt-10 aspect-[4/3] rounded-md border border-line lg:mt-12"
        />

        <section aria-labelledby="problem" className="mt-12 lg:mt-16">
          <h2 id="problem" className={sectionHeading}>
            {work.sections.problem}
          </h2>
          <div className={`mt-4 space-y-4 ${body}`}>
            {project.problem.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section aria-labelledby="approach" className="mt-12 lg:mt-14">
          <h2 id="approach" className={sectionHeading}>
            {work.sections.approach}
          </h2>
          <ul className={`mt-4 space-y-4 ${body}`}>
            {project.approach.map((item) => (
              <li key={item.label}>
                <strong className="font-semibold">{item.label}</strong> {item.text}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="result" className="mt-12 lg:mt-14">
          <h2 id="result" className={sectionHeading}>
            {work.sections.result}
          </h2>
          <div className={`mt-4 space-y-4 ${body}`}>
            {project.result.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </section>

        {project.links && project.links.length > 0 && (
          <section aria-labelledby="links" className="mt-10 lg:mt-12">
            <h2 id="links" className="label">
              {work.sections.links}
            </h2>
            <ul className="mt-2">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-1.5 text-[16px] text-fg underline decoration-underline underline-offset-4 transition-colors hover:decoration-fg"
                  >
                    {link.label}
                    <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" className="text-muted" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {next && (
          <nav aria-label={work.nextProject} className="mt-14 border-t border-line pt-6 lg:mt-16 lg:pt-8">
            <Link href={`/work/${next.slug}`} className="group inline-flex flex-col gap-2">
              <span className="label inline-flex items-center gap-2">
                {work.nextProject} →
              </span>
              <span className="inline-flex items-center gap-3 text-[20px] font-bold leading-tight tracking-[-0.02em] lg:text-[24px]">
                {next.title}
                <ArrowRight
                  size={20}
                  strokeWidth={1.75}
                  aria-hidden="true"
                  className="text-accent transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          </nav>
        )}
      </div>
    </article>
  );
}
