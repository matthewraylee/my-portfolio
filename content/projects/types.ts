import type { TagId } from "../tags";

export type Project = {
  slug: string;
  published: boolean; // false = hidden everywhere: lists, pages, sitemap
  date: string; // "YYYY-MM", for sorting /work newest first
  title: string;
  org: string; // card label, shown as "org · year"
  year: string; // shown on cards and in the spec table
  cardLine: string; // the one line on cards
  summary: string; // one-line summary at the top of the page
  spec: {
    role: string;
    tools: string[];
    result: string;
    team?: string;
  };
  problem: string[]; // paragraphs
  approach: { label: string; text: string }[];
  result: string[]; // paragraphs
  links?: { label: string; href: string }[];
  image: { src: string | null; alt: string }; // src null = placeholder
  /** Optional image for the project cards only (homepage and /work); the
   *  project page keeps `image`. Leave out to use `image` everywhere. */
  cardImage?: { src: string; alt: string };
  tags: TagId[];
};
