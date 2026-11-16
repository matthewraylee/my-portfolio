import type { Project } from "./types";
import { discrepancyDashboard } from "./discrepancy-dashboard";
import { seasonalLaunch } from "./seasonal-launch";
import { fitnxtChatbot } from "./fitnxt-chatbot";

export type { Project };

export const projects: Project[] = [
  discrepancyDashboard,
  seasonalLaunch,
  fitnxtChatbot,
];

/** Featured projects in display order. Which ones is set in each file. */
export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => a.order - b.order);
