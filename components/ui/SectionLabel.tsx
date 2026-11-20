import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  /** Optional link on the right of the row, e.g. "All work →". */
  aside?: React.ReactNode;
  id?: string;
  /** "h2" for homepage sections; "p" where a real heading follows (e.g. /work). */
  as?: "h2" | "p";
  className?: string;
};

/** Small wide lowercase section label with a 1px line under the row. */
export function SectionLabel({
  children,
  aside,
  id,
  as: Tag = "h2",
  className,
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "mb-6 flex items-end justify-between gap-4 border-b border-line pb-3 lg:mb-10 lg:pb-4",
        className
      )}
    >
      <Tag id={id} className="label">
        {children}
      </Tag>
      {aside}
    </div>
  );
}
