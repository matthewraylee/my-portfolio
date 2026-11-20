import type { Project } from "./types";

// No accuracy figure (no "92%") until Matthew confirms its source.
export const garbedge: Project = {
  slug: "garbedge",
  published: true,
  date: "2025-03",
  title: "GarbEdge",
  org: "UW Foster MSIS",
  year: "2025",
  cardLine:
    "Machine learning that spots what doesn't belong in recycling. Won the UW MSIS Case Competition.",
  summary:
    "With four MSIS classmates, I built GarbEdge, a model that watches through a camera and sorts waste into compost, recycling, and garbage in real time. It won the UW MSIS Case Competition and was a finalist in the UW Environmental Innovation Challenge.",
  spec: {
    role: "Full-stack engineer, team of five",
    tools: ["Python", "YOLOv8", "Gradio"],
    result:
      "Won the MSIS Case Competition (13 teams); Environmental Innovation Challenge finalist (23 of 43 teams)",
    team: "Annabelle Brown, Yen Wu (Allen) Chiang, Prerna Singhal, Kritika Sharma, and me",
  },
  problem: [
    // TODO(Matthew): confirm against the problem statement in the pitch
    "Recycling only works when the wrong things stay out of it, and people often aren't sure which bin an item belongs in. GarbEdge set out to catch those mistakes in real time, before they reach the recycling stream.",
  ],
  approach: [
    {
      label: "Started in class.",
      text: "GarbEdge began in Professor Léonard Boussioux's GenAI & AI for Business Applications class. Our first version, developed together with another group of classmates, got an honorable mention in an early round, and we used the judges' feedback to rebuild it.",
    },
    {
      label: "Built the model.",
      // TODO(Matthew): confirm the training split with Allen
      text: "As the team's full-stack engineer, I trained a YOLOv8 object-detection model with Allen on public, labeled images of waste.",
    },
    {
      label: "Built the demo.",
      text: "I built a webcam app in Gradio that labels each item as compost, recyclable, or garbage, with a short explanation of why.",
    },
  ],
  result: [
    "In March 2025, GarbEdge was named one of 23 finalists, out of 43 teams, in the Environmental Innovation Challenge at UW's Buerk Center for Entrepreneurship. The same month it won the MSIS Case Competition out of 13 teams, judged by industry leaders including people from Microsoft, Amazon, Meta, and Costco.",
  ],
  links: [
    { label: "GitHub repo", href: "https://github.com/matthewraylee/garbage_classification" },
    { label: "Demo video", href: "https://www.youtube.com/watch?v=FBYZHzBy5O4" },
    { label: "Foster School article", href: "https://foster.uw.edu/news/msis-demo-day-ai/" },
    {
      label: "Buerk Center: 2025 finalists",
      href: "https://uwbuerkcenter.medium.com/2025-environmental-innovation-challenge-finalists-1fa20b8429f2",
    },
  ],
  // Temporary (Nov 20): the GarbEdge logo, built from the old site's
  // public/Projects/GarbEdge/overview.png on a 1600×1200 canvas. To be
  // replaced by a frame from the demo video or a photo with Matthew in it;
  // then the alt goes back to describing that image, e.g. "GarbEdge's webcam
  // demo labeling an item as compost, recycling, or garbage".
  image: {
    src: "/images/work/garbedge.png",
    alt: "The GarbEdge logo: a recycling symbol above the name GarbEdge",
  },
  tags: ["ai"],
};
