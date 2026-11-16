import { features } from "@/site.config";

export type NavItem = { label: string; href: string };

// Milestone 1: nav points at homepage sections. In milestone 2, Work,
// Work with me and Outside work switch to /work, /work-with-me and
// /outside-work.
const allItems: (NavItem & { enabled: boolean })[] = [
  { label: "Work", href: "/#work", enabled: true },
  { label: "About", href: "/#about", enabled: true },
  { label: "Work with me", href: "/#work-with-me", enabled: features.workWithMe },
  { label: "Outside work", href: "/#outside-work", enabled: true },
  { label: "Contact", href: "/#contact", enabled: true },
];

export const navItems: NavItem[] = allItems
  .filter((item) => item.enabled)
  .map(({ label, href }) => ({ label, href }));
