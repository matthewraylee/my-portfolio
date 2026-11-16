// Experience rows, plus the two schools for the education row in About
// (Education moved into About on Nov 15, so it isn't shown twice).
//
// Open items: FitNxt title (Volunteer Developer or AI Solutions Engineer)
// and Redapt title.
//
// Education rules: no school logos, no awards or student activities
// (GarbEdge's MSIS Case Competition win appears only on the GarbEdge project
// page), and Green River College is left out. In the later Indonesian
// version, the degrees are labeled S2 and S1.

export type ExperienceRow = {
  years: string;
  org: string;
  role: string;
  location: string;
};

export type EducationEntry = {
  /** Shown in the small label style, e.g. "m.s. information systems · 2025". */
  degree: string;
  year: string;
  /** Set large. */
  school: string;
  detail: string;
};

export const experience: ExperienceRow[] = [
  {
    years: "2025 – 2026",
    org: "Starbucks, Global Supply Chain Solutions",
    role: "Distribution Analyst, after Logistics Services Representative",
    location: "Seattle",
  },
  {
    years: "2025",
    org: "Apogee Health & Performance (FitNxt)",
    role: "Volunteer, built the AI chatbot",
    location: "Seattle",
  },
  {
    years: "2023 – 2024",
    org: "Redapt",
    role: "Data center and logistics operations",
    location: "Woodinville, WA",
  },
  {
    years: "2021, 2023",
    org: "Amtrak",
    role: "Software Developer Intern",
    location: "Washington, DC",
  },
  {
    years: "2018 – 2019",
    org: "Enseval and KlikDokter",
    role: "Web Developer Intern",
    location: "Jakarta",
  },
];

export const education: EducationEntry[] = [
  {
    degree: "m.s. information systems",
    year: "2025",
    school: "University of Washington",
    detail: "Foster School of Business, Seattle",
  },
  {
    degree: "b.s. computer science",
    year: "2023",
    school: "University of Maryland",
    detail: "College Park · minor in Entrepreneurship",
  },
];
