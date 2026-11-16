import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  /** primary = hairline box (one per section); secondary = underlined text. */
  variant?: "primary" | "secondary";
  /** arrow after the label, download before it, or none. */
  icon?: "arrow" | "download" | "none";
  className?: string;
};

const iconProps = { size: 18, strokeWidth: 1.75, "aria-hidden": true } as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon = variant === "primary" ? "arrow" : "none",
  className,
}: ButtonLinkProps) {
  const classes = cn(
    "button-label inline-flex min-h-12 items-center justify-center gap-3 transition-colors duration-150",
    variant === "primary" &&
      "rounded-[2px] border border-fg px-5 text-fg hover:bg-fg hover:text-bg",
    variant === "secondary" &&
      "text-fg underline decoration-underline decoration-1 underline-offset-[7px] hover:decoration-fg",
    className
  );

  const content = (
    <>
      {icon === "download" && <Download {...iconProps} />}
      <span>{children}</span>
      {icon === "arrow" && <ArrowRight {...iconProps} />}
    </>
  );

  // Internal routes use next/link; mailto, external and file links use <a>.
  const isInternalRoute = href.startsWith("/") && !href.endsWith(".pdf");

  return isInternalRoute ? (
    <Link href={href} className={classes}>
      {content}
    </Link>
  ) : (
    <a href={href} className={classes}>
      {content}
    </a>
  );
}
