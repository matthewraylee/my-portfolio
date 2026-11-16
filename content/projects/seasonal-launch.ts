import type { Project } from "./types";

// Third highlight: pending confirmation with the Brand & Content chat.
// To feature GarbEdge instead, set `featured: false` here and add a
// garbedge.ts with `featured: true, order: 3`.
export const seasonalLaunch: Project = {
  slug: "seasonal-launch",
  title: "Seasonal launch process",
  org: "Starbucks",
  year: "2026",
  summary:
    "Ran a new seasonal program outside the standard order flow, and left a process the team can reuse.",
  featured: true,
  order: 2,
  image: null,
  alt: "Flow diagram of the seasonal launch",
  placeholder: "[Flow diagram of the launch]",
};
