import type { Project } from "./types";

// Not published yet: shows nowhere (lists, pages, sitemap) until
// `published` is true and the copy is in.
export const measuringMyWork: Project = {
  slug: "measuring-my-work",
  published: false,
  date: "2026-02",
  title: "Measuring my own work",
  org: "Starbucks",
  year: "2026",
  cardLine:
    "With no performance metrics yet, I analyzed about 2,900 of my own cases in Python.",
  // TODO(Matthew): copy coming (summary, role, result, problem, approach, result, image alt)
  summary: "",
  spec: {
    role: "",
    tools: ["Python", "Jupyter"],
    result: "",
  },
  problem: [],
  approach: [],
  result: [],
  image: { src: null, alt: "" },
  tags: ["operations", "data"],
};
