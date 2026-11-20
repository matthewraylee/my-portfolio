// Provisional tag list (work section handoff, Nov 20); Matthew will rename or
// replace these. Each project lists its tags; /work filters by them.
// TODO(Matthew): confirm the tag names
export const tags = [
  { id: "supply-chain", label: "supply chain" },
  { id: "operations", label: "operations" },
  { id: "data", label: "data & dashboards" },
  { id: "ai", label: "ai & machine learning" },
] as const;

export type TagId = (typeof tags)[number]["id"];

export function isTagId(value: unknown): value is TagId {
  return tags.some((tag) => tag.id === value);
}
