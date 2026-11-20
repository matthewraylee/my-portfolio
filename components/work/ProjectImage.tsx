import Image from "next/image";
import { Placeholder } from "@/components/ui/Placeholder";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

type ProjectImageProps = {
  project: Project;
  /** Responsive `sizes` for next/image once a real image exists. */
  sizes: string;
  /** Show the bracketed alt text on the placeholder. */
  showCaption?: boolean;
  /** "card" uses `cardImage` when the project has one. */
  variant?: "page" | "card";
  captionClassName?: string;
  priority?: boolean;
  className?: string;
};

/** A project's 4:3 image, or the hazy placeholder (with its alt text in brackets) until it exists. */
export function ProjectImage({
  project,
  sizes,
  showCaption = true,
  captionClassName,
  priority,
  variant = "page",
  className,
}: ProjectImageProps) {
  const { src, alt } =
    variant === "card" && project.cardImage ? project.cardImage : project.image;

  if (!src) {
    return (
      <Placeholder
        alt={alt}
        caption={showCaption ? `[${alt}]` : undefined}
        captionClassName={captionClassName}
        className={className}
      />
    );
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
}
