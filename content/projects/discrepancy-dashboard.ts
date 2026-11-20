import type { Project } from "./types";

export const discrepancyDashboard: Project = {
  slug: "discrepancy-dashboard",
  published: true,
  date: "2026-10", // TODO(Matthew): confirm
  title: "Discrepancy dashboard",
  org: "Starbucks",
  year: "2026",
  cardLine:
    "A hand-kept log of order problems, turned into a dashboard the team uses.",
  summary:
    "I turned a hand-kept log of order discrepancies on the Nestlé account into a Tableau dashboard that shows trends, flags problem SKUs, and tracks credits.",
  spec: {
    role: "Distribution Analyst, built on my own initiative alongside daily work",
    tools: ["Smartsheet", "Python", "Streamlit", "Tableau", "Databricks (designed)"],
    result:
      "Trends, SKU flags and credits in one place; an automated refresh designed, projected to save about 5 hours a week",
  },
  problem: [
    "A discrepancy is any gap between what a customer ordered and what it received: a short delivery, product with too little remaining shelf life, a mis-shipment, a wrong SKU, an order-entry mistake. On the Nestlé account, part of the Global Coffee Alliance, each one went into a Smartsheet log. By 2026 that log held cases from four distribution centers going back to 2022.",
    "The log recorded every case, but it couldn't answer the questions that mattered. Which SKUs keep coming up? When do problems spike? How much is going out in credits, and which planner needs to hear about it? Every answer meant digging through the log by hand.",
  ],
  approach: [
    {
      label: "Defined it with my lead.",
      text: "We agreed on the KPIs and views the team needed: seasonal trends, SKU flags, credits and billing, which planner owns each SKU, and limited-time products tracked apart from core ones.",
    },
    {
      label: "Built it first in Python.",
      text: "My first version, built from scratch in Python and Streamlit, was flexible and could refresh itself. But only someone who codes could keep it running.",
    },
    {
      label: "Rebuilt it in Tableau.",
      text: "I gave up some customization and automation so teammates without a technical background can update it and use it on their own. A tool the team can run without me was worth more than a cleverer one.",
    },
    {
      label: "Designed the automation.",
      text: "With the technology teams, I designed an automated refresh in Databricks to replace the manual data cleanup. It's designed but not built yet.",
    },
  ],
  result: [
    // TODO(Matthew): confirm who uses the dashboard ("the team now has one dashboard")
    "The team now has one dashboard to see seasonal patterns, catch SKUs that keep coming up, track credits, and send issues to the right planner, instead of combing through the log. Once built, the automated refresh is projected to save about 5 hours of manual reporting a week.",
  ],
  // Reserved: public/images/work/discrepancy-dashboard.png (a diagram, never a
  // screenshot of the real dashboard).
  image: {
    src: null,
    alt: "Diagram of the dashboard's path from a Smartsheet log to a Tableau dashboard",
  },
  tags: ["supply-chain", "data"],
};
