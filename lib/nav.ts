import { site } from "@/content/site";
import { features } from "@/site.config";

export type NavItem = { label: string; href: string };

// Labels and links live in content/site.ts. Work goes to /work; Work with me
// and Outside work point at homepage sections until /work-with-me and
// /outside-work exist.
export const navItems: NavItem[] = site.nav
  .filter((item) => item.key !== "workWithMe" || features.workWithMe)
  .map(({ label, href }) => ({ label, href }));
