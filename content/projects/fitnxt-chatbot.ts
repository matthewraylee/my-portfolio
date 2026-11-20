import type { Project } from "./types";

export const fitnxtChatbot: Project = {
  slug: "fitnxt-chatbot",
  published: true,
  date: "2025-11",
  title: "FitNxt AI chatbot",
  org: "Apogee Health & Performance",
  year: "2025",
  // Changed from the handoff's "built to stay cheap to run" (Matthew, Nov 20).
  cardLine:
    "An AI personal trainer inside a fitness app, built to run cost-efficiently.",
  summary:
    "I built the AI chatbot in FitNxt, a fitness app: an AI personal trainer that gives advice and builds workout plans from what the team's certified trainers know.",
  spec: {
    role: "AI Solutions Engineer (volunteer)", // TODO(Matthew): confirm
    tools: ["Gemini", "React Native", "Azure SQL"],
    result: "20+ beta testers; cloud and AI costs cut 30%; now on the App Store",
  },
  problem: [
    "FitNxt, from the Seattle startup Apogee Health & Performance, puts a whole fitness routine in one app: tracking, a gamified fitness journey, and motion tracking that checks your form. The team wanted a chatbot that works like a personal trainer, answering questions and building workout plans, with advice that follows how their certified trainers coach. It also had to stay affordable as more people used it, since every AI reply costs money.",
  ],
  approach: [
    {
      label: "Built the chatbot.",
      text: "I built it into the app with Gemini and React Native, mostly on my own, using AI coding tools to move faster.",
    },
    {
      label: "Grounded it in real coaching.",
      text: "The certified trainers on the team contributed the knowledge behind it, so its plans and answers follow their coaching instead of generic tips.",
    },
    {
      label: "Set limits by plan.",
      text: "I designed the Azure SQL database that tracks how much each person uses the chatbot, with limits set by plan tier.",
    },
    {
      label: "Kept it lean.",
      text: "I kept the database and the AI requests efficient, so each conversation uses fewer tokens and less cloud capacity.",
    },
  ],
  result: [
    "More than 20 beta testers used it in 2025, and the tier limits and leaner design cut cloud and AI costs by 30%. FitNxt is now live on the App Store.",
  ],
  links: [
    {
      label: "FitNxt on the App Store",
      href: "https://apps.apple.com/us/app/fitnxt/id6757842581",
    },
  ],
  // Two frames (1:22 and 2:25) from Matthew's screen recording of the app's
  // "Fit AI" chat (public/Projects/FitNxt/chat_bot_screen.mp4), composed on a
  // 1600×1200 canvas. Apogee approved showing the chat screen (Nov 20).
  image: {
    src: "/images/work/fitnxt-chatbot.png",
    alt: "Two screens from the FitNxt app's AI chat: the assistant explaining progressive overload and asking about goals, then the 3-day muscle-building plan it created",
  },
  // Cards (homepage and /work) show the FitNxt logo, built from
  // public/Projects/FitNxt/fitnxt_logo.png on a 1600×1200 canvas.
  cardImage: {
    src: "/images/work/fitnxt-chatbot-card.png",
    alt: "The FitNxt logo",
  },
  tags: ["ai"],
};
