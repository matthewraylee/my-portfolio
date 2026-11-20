import type { Project } from "./types";

// Not published yet: shows nowhere (lists, pages, sitemap) until
// `published` is true and the copy is in.
export const seasonalLaunch: Project = {
  slug: "seasonal-launch",
  published: false,
  date: "2026-08",
  title: "Seasonal launch process",
  org: "Starbucks",
  year: "2026",
  cardLine:
    "A seasonal launch run outside the usual order system, and a process the team can reuse.",
  // TODO(Matthew): copy coming (summary, role, result, problem, approach, result, image alt)
  summary: "",
  spec: {
    role: "",
    tools: ["Oracle", "a shared tracker"],
    result: "",
  },
  problem: [],
  approach: [],
  result: [],
  image: { src: null, alt: "" },
  tags: ["supply-chain", "operations"],
};
