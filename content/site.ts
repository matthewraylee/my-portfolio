// Site-wide copy for Edition 01. Placeholder text comes from the build brief
// and the design renders; final copy comes from the Brand & Content chat.
//
// The status line and the bio are the parts that change when plans change.
// Each lives here, in exactly one place.

export const site = {
  name: "Matthew Ray Lee",
  headerLabel: "matthew ray lee",
  email: "matthewraylee.work@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/matthewraylee/",
    github: "https://github.com/matthewraylee",
  },
  resumeHref: "/resume.pdf",

  edition: {
    label: "edition 01 · 2026",
    builtLine: "Edition 01 · Built in Seattle, November 2026",
    copyright: "© 2026 Matthew Ray Lee",
    previous: {
      label: "Previous edition: No. 00 (2025)",
      href: "https://2025.matthewraylee.com",
    },
  },

  // Status line. `location` is also shown on its own in the contact section.
  status: {
    location: "Based in Asia from December 2026",
    detail:
      "Open to supply chain and operations roles, and a few systems projects.",
  },

  hero: {
    label: "supply chains · data · systems",
    headline: "I help businesses modernize how they run.",
    subhead:
      "Supply chains, data, and the systems behind them. Most recently at Starbucks, supporting international customer accounts across the US, Canada, and Asia.",
    cover: {
      caption: "[Your photo, soft focus]",
      alt: "Matthew Ray Lee",
    },
  },

  bio: "I'm Matthew, an Indonesian analyst and developer with a computer science degree and a Master's in Information Systems from the University of Washington. At Starbucks, I supported international customer accounts across the US, Canada, and Asia, and replaced a manual discrepancy log with a Tableau dashboard. Now I'm heading back to Asia to help businesses modernize how they run.",

  aboutPoints: [
    {
      label: "operator",
      text: "International customer accounts at Starbucks, including Nestlé under the Global Coffee Alliance. Promoted within four months.",
    },
    {
      label: "builder",
      text: "Dashboards, internal tools, and AI features that replace manual work.",
    },
    {
      label: "bridge",
      text: "Indonesian, educated in the US, with work experience in Jakarta and the US. English, Bahasa Indonesia, and conversational Mandarin.",
    },
  ],

  workWithMe: {
    heading: "For businesses that have outgrown their spreadsheets.",
    offers: [
      {
        title: "Dashboards",
        text: "Replace manual reports and logs with views that update themselves.",
      },
      {
        title: "Internal tools",
        text: "Simple systems for orders, inventory, and operations, built around how your team already works.",
      },
      {
        title: "AI features",
        text: "Chatbots and automations where they save real time.",
      },
    ],
    referral: "If someone pointed you here, mention them when you write.",
  },

  outsideWork: {
    line: "Here's me outside of work.",
    caption:
      "[A candid photo of you off the clock: on the course, or at your shelf]",
    alt: "Matthew off the clock",
  },

  contact: {
    heading: "Let's talk.",
  },

  notFound: {
    heading: "This page doesn't exist.",
  },
} as const;
