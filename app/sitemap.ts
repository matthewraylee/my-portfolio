import type { MetadataRoute } from "next";
import { getPublishedProjects } from "@/content/projects";
import { site } from "@/content/site";

// Published pages only; unpublished projects never appear here.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/` },
    { url: `${site.url}/work` },
    ...getPublishedProjects().map((project) => ({
      url: `${site.url}/work/${project.slug}`,
    })),
  ];
}
