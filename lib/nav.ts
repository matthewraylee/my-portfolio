import { site } from "@/content/site";
import { features } from "@/site.config";

export type NavItem = { label: string; href: string };

// Milestone 1: nav points at homepage sections (labels and links live in
// content/site.ts). In milestone 2, Work, Work with me and Outside work
// switch to /work, /work-with-me and /outside-work.
export const navItems: NavItem[] = site.nav
  .filter((item) => item.key !== "workWithMe" || features.workWithMe)
  .map(({ label, href }) => ({ label, href }));
