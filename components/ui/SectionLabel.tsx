import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  /** Optional link on the right of the row, e.g. "All work →". */
  aside?: React.ReactNode;
  id?: string;
  className?: string;
};

/** Small wide lowercase section label with a 1px line under the row. */
export function SectionLabel({
  children,
  aside,
  id,
  className,
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "mb-8 flex items-end justify-between gap-4 border-b border-line pb-4 lg:mb-10",
        className
      )}
    >
      <h2 id={id} className="label">
        {children}
      </h2>
      {aside}
    </div>
  );
}
