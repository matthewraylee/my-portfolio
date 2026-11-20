import Link from "next/link";
import { ChipScroller } from "@/components/work/ChipScroller";
import type { TagId } from "@/content/tags";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type TagFilterProps = {
  /** Tags used by at least one published project. */
  tags: readonly { id: TagId; label: string }[];
  active: TagId | null;
};

const chip =
  "button-label inline-flex min-h-11 shrink-0 items-center whitespace-nowrap rounded-[2px] border px-4 transition-colors";

/**
 * Filter chips for /work. Real links (/work?tag=…), so the back button works
 * and a filtered view can be shared. One choice at a time; "all" is /work.
 * Phones: the row scrolls sideways and never wraps.
 */
export function TagFilter({ tags, active }: TagFilterProps) {
  // Hide the row while fewer than two tags are in use.
  if (tags.length < 2) return null;

  const items = [
    { key: "all", label: site.work.allTag, href: "/work", current: active === null },
    ...tags.map((tag) => ({
      key: tag.id,
      label: tag.label,
      href: `/work?tag=${tag.id}`,
      current: active === tag.id,
    })),
  ];

  return (
    <nav aria-label={site.work.filterLabel}>
      <ChipScroller className="-mx-6 overflow-x-auto px-6 lg:mx-0 lg:px-0">
        <ul className="flex w-max gap-2 pr-6 lg:w-auto lg:flex-wrap lg:pr-0">
          {items.map((item) => (
            <li key={item.key} className="shrink-0">
              <Link
                href={item.href}
                scroll={false}
                aria-current={item.current ? "page" : undefined}
                className={cn(
                  chip,
                  item.current
                    ? "border-fg bg-fg text-bg"
                    : "border-underline text-fg hover:border-fg"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </ChipScroller>
    </nav>
  );
}
