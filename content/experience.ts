// Placeholder copy from the design renders. Open items: FitNxt title
// (Volunteer Developer or AI Solutions Engineer) and Redapt title.

export type ExperienceRow = {
  years: string;
  org: string;
  role: string;
  location: string;
};

export type EducationRow = {
  year: string;
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

export const education: EducationRow[] = [
  {
    year: "2025",
    school: "University of Washington, Foster School of Business",
    detail:
      "M.S. Information Systems. Won the MSIS Case Competition with GarbEdge.",
  },
  {
    year: "2023",
    school: "University of Maryland, College Park",
    detail: "B.S. Computer Science, minor in Entrepreneurship",
  },
];
