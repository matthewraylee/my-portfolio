import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/content/site";

export function About() {
  return (
    <section id="about" aria-labelledby="about-label" className="wrap section-space">
      <SectionLabel id="about-label">about</SectionLabel>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_474px] lg:gap-20">
        <p className="text-[19px] leading-[1.5] tracking-[-0.01em] text-fg lg:text-[26px]">
          {site.bio}
        </p>

        <ul>
          {site.aboutPoints.map((point) => (
            <li key={point.label} className="border-t border-line py-6">
              <h3 className="label">{point.label}</h3>
              <p className="mt-2 text-[16px] leading-[1.6] text-fg lg:text-[17px]">
                {point.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
