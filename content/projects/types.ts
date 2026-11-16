export type Project = {
  slug: string;
  title: string;
  org: string;
  year: string;
  /** One line, shown on cards and rows. */
  summary: string;
  // Filled in for the project pages (milestone 2).
  role?: string;
  tools?: string[];
  result?: string;
  /** Shown in "Selected work" on the homepage. */
  featured: boolean;
  /** Order among featured projects (1 = first). */
  order: number;
  /** Path under /public, or null while a placeholder is shown. */
  image: string | null;
  alt: string;
  /** Bracketed caption shown on the placeholder until the image exists. */
  placeholder: string;
};
