"use client";

import { useEffect, useRef } from "react";

/**
 * The sideways-scrolling chip row on phones. On load, scrolls the active chip
 * (aria-current="page") into view so a filtered view never hides its own
 * filter. The chips themselves stay plain links.
 */
export function ChipScroller({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = ref.current;
    const active = row?.querySelector<HTMLElement>('[aria-current="page"]');
    if (!row || !active) return;
    const overflowRight = active.offsetLeft + active.offsetWidth - (row.scrollLeft + row.clientWidth);
    if (overflowRight > 0) row.scrollLeft += overflowRight + 24;
  });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
