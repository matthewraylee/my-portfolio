import { cn } from "@/lib/utils";

type PlaceholderProps = {
  /** Bracketed note about the photo that goes here. */
  caption?: string;
  captionPosition?: "bottom-left" | "top-right";
  captionClassName?: string;
  /** Describes the eventual image for screen readers. */
  alt: string;
  className?: string;
  /** Content layered on top (e.g. a logo, scrim, text or a button). */
  children?: React.ReactNode;
};

/** Hazy blue-grey stand-in for photos and diagrams that don't exist yet. */
export function Placeholder({
  caption,
  captionPosition = "bottom-left",
  captionClassName,
  alt,
  className,
  children,
}: PlaceholderProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* The "image" layer; overlaid children stay outside role="img". */}
      <div role="img" aria-label={alt} className="placeholder-haze absolute inset-0" />
      {caption && (
        <span
          aria-hidden="true"
          className={cn(
            "absolute z-10 text-[12px] leading-snug tracking-[0.04em] text-muted",
            captionPosition === "bottom-left" && "bottom-3 left-4 right-4",
            captionPosition === "top-right" &&
              "top-4 right-5 left-5 text-left lg:text-right",
            captionClassName
          )}
        >
          {caption}
        </span>
      )}
      {children}
    </div>
  );
}
