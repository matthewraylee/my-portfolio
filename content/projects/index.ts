import type { Project } from "./types";
import { featuredWork } from "../site";
import { discrepancyDashboard } from "./discrepancy-dashboard";
import { fitnxtChatbot } from "./fitnxt-chatbot";
import { garbedge } from "./garbedge";
import { seasonalLaunch } from "./seasonal-launch";
import { measuringMyWork } from "./measuring-my-work";

export type { Project };

/** Every project file, published or not. Add new projects here. */
const allProjects: Project[] = [
  discrepancyDashboard,
  fitnxtChatbot,
  garbedge,
  seasonalLaunch,
  measuringMyWork,
];

/** Published projects, newest first (by `date`, "YYYY-MM"). */
export function getPublishedProjects(): Project[] {
  return allProjects
    .filter((project) => project.published)
    .sort((a, b) => b.date.localeCompare(a.date));
}

/** A published project by slug, or undefined. Unpublished = not found. */
export function getProject(slug: string): Project | undefined {
  return getPublishedProjects().find((project) => project.slug === slug);
}

/** The next published project in /work order, wrapping to the first. */
export function getNextProject(slug: string): Project | undefined {
  const list = getPublishedProjects();
  const index = list.findIndex((project) => project.slug === slug);
  if (index === -1 || list.length < 2) return undefined;
  return list[(index + 1) % list.length];
}

/** The homepage three, in the order of `featuredWork` in content/site.ts. */
export function getFeaturedProjects(): Project[] {
  return featuredWork.map((slug) => getProject(slug)!);
}

// Fail the build early, with a clear message, if featuredWork is wrong.
(function checkFeaturedWork() {
  // Widened on purpose: with the `as const` list, TypeScript would otherwise
  // stop the build with a less helpful type error before this check runs.
  const list: readonly string[] = featuredWork;
  const problems: string[] = [];
  if (list.length !== 3) {
    problems.push(`it lists ${list.length} slugs; it needs exactly 3`);
  }
  if (new Set(list).size !== list.length) {
    problems.push("it lists the same slug more than once");
  }
  for (const slug of list) {
    const project = allProjects.find((p) => p.slug === slug);
    if (!project) problems.push(`"${slug}" doesn't match any project in content/projects/`);
    else if (!project.published) problems.push(`"${slug}" isn't published (published: false)`);
  }
  if (problems.length > 0) {
    throw new Error(
      `featuredWork in content/site.ts is invalid: ${problems.join("; ")}.`
    );
  }
})();
