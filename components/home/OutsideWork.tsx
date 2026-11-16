import { ButtonLink } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/content/site";

export function OutsideWork() {
  const { outsideWork } = site;

  return (
    <section
      id="outside-work"
      aria-labelledby="outside-work-label"
      className="wrap section-space"
    >
      <SectionLabel id="outside-work-label">outside work</SectionLabel>

      <Placeholder
        alt={outsideWork.alt}
        caption={outsideWork.caption}
        captionPosition="top-right"
        className="aspect-[4/5] rounded-md border border-line lg:aspect-[21/9]"
      >
        {/* Dark-to-clear scrim at the bottom */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[var(--scrim)] to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-6 p-6 lg:flex-row lg:items-end lg:justify-between lg:p-12">
          <p className="type-h2 max-w-[560px] text-fg">{outsideWork.line}</p>
          <ButtonLink href="/outside-work">take a look</ButtonLink>
        </div>
      </Placeholder>
    </section>
  );
}
