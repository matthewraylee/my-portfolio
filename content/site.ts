// Site-wide copy for Edition 01. Components read every visible string from
// here (or from content/projects and content/experience.ts).
//
// The status line and the About copy are the parts that change when plans
// change. Each lives here, in exactly one place.

export const site = {
  name: "Matthew Ray Lee",
  headerLabel: "matthew ray lee",
  email: "matthewraylee.work@gmail.com",
  links: {
    linkedin: { label: "LinkedIn", href: "https://www.linkedin.com/in/matthewraylee/" },
    github: { label: "GitHub", href: "https://github.com/matthewraylee" },
  },
  resumeHref: "/resume.pdf",

  // Header and mobile menu. `workWithMe` is hidden when its flag is off.
  nav: [
    { key: "work", label: "Work", href: "/#work" },
    { key: "about", label: "About", href: "/#about" },
    { key: "workWithMe", label: "Work with me", href: "/#work-with-me" },
    { key: "outsideWork", label: "Outside work", href: "/#outside-work" },
    { key: "contact", label: "Contact", href: "/#contact" },
  ],

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
    primaryCta: { label: "see my work", href: "/#work" },
    secondaryCta: { label: "get in touch", href: "/#contact" },
    cover: {
      caption: "[Your photo, soft focus]",
      alt: "Matthew Ray Lee",
    },
  },

  selectedWork: {
    label: "selected work",
    allWork: { label: "All work", href: "/work" },
    readMore: "Read the story",
  },

  // About (final, Nov 15). Only the lead is set large.
  about: {
    label: "about",
    lead: "I'm Matthew. I turn spreadsheets, manual steps, and someone's memory into systems a team can actually run on.",
    paragraphs: [
      "It bugs me when good people lose hours to work a simple system could do. I build to give that time back, not to replace anyone, and my favorite part is seeing a team use it every day. If a process doesn't need a system, I leave it alone.",
      "I started building small tools as an intern in Jakarta, studied computer science in the US, and learned supply chain from the inside at Starbucks. Now I'm heading back to Asia to bring what works, and only where it fits.",
    ],
    points: [
      {
        label: "operator",
        text: "International supply chain accounts at Starbucks, including Nestlé under the Global Coffee Alliance.",
      },
      {
        label: "builder",
        text: "Dashboards, CRMs, cloud migrations, and AI features that cut manual work and errors. Built for Starbucks, Seattle nonprofits, a seafood trading company, and a live fitness app.",
      },
      {
        label: "bridge",
        text: "Indonesian, educated in the US, with work in Jakarta and the US. English, Bahasa Indonesia, and conversational Mandarin.",
      },
    ],
    // The schools themselves live in content/experience.ts.
    educationLabel: "education",
  },

  workWithMe: {
    label: "work with me",
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
    cta: "start a conversation",
  },

  experience: {
    label: "experience",
    resumeCta: "download resume (pdf)",
  },

  outsideWork: {
    label: "outside work",
    line: "Here's me outside of work.",
    caption:
      "[A candid photo of you off the clock: on the course, or at your shelf]",
    alt: "Matthew off the clock",
    cta: { label: "take a look", href: "/outside-work" },
  },

  contact: {
    label: "contact",
    heading: "Let's talk.",
  },

  notFound: {
    label: "404",
    heading: "This page doesn't exist.",
    cta: "go home",
  },
} as const;
