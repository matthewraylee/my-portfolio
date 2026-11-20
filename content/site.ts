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
      "Dashboards, internal tools, and AI features. Most recently in supply chain at Starbucks, working with accounts across the US, Canada, and Asia.",
    primaryCta: { label: "see my work", href: "/#work" },
    secondaryCta: { label: "get in touch", href: "/#contact" },
    // Placeholder cutout (Nov 20). Replace with one cut from the original,
    // full-size Foster photo before launch.
    cutout: {
      src: "/images/hero/matthew-cutout.png",
      width: 1160,
      height: 1460,
      alt: "Matthew Ray Lee in a grey hoodie, arms crossed, smiling",
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
    // Three lines per card (Nov 16). `project` is the slug of the project page
    // the card links to; null means a plain box.
    offers: [
      {
        title: "Dashboards",
        outcome: "Know what's off before the weekly meeting.",
        body: "Tableau or Power BI views of your KPIs and exceptions, built from the data you already have.",
        project: "discrepancy-dashboard",
      },
      {
        title: "Internal tools",
        outcome: "Stop running the business from one person's spreadsheet.",
        body: "Simple systems for orders, inventory, and customers, built around how your team already works.",
        project: null,
      },
      {
        title: "AI features",
        outcome: "Take repetitive questions off your team's plate.",
        body: "Chatbots and assistants that handle the routine work, with a person still checking the output.",
        project: "fitnxt-chatbot",
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
    // Shown only when features.whatsapp is on. Number: country code, no plus
    // sign, spaces or dashes (e.g. "62812…"). Not settled yet.
    whatsapp: {
      label: "WhatsApp",
      number: "",
      message: "Hi Matthew, I found you through matthewraylee.com.",
    },
  },

  notFound: {
    label: "404",
    heading: "This page doesn't exist.",
    cta: "go home",
  },
} as const;
