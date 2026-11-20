import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/content/site";
import { education } from "@/content/experience";

export function About() {
  const { about } = site;

  return (
    <section id="about" aria-labelledby="about-label" className="wrap section-space">
      <SectionLabel id="about-label">{about.label}</SectionLabel>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_474px] lg:gap-20">
        <div>
          {/* Only the lead is set large. */}
          <p className="max-w-[640px] text-[23.5px] font-semibold leading-[1.36] tracking-[-0.015em] text-fg lg:text-[30px] lg:font-medium lg:leading-[1.35]">
            {about.lead}
          </p>
          <div className="mt-5 max-w-[600px] space-y-5 text-[17px] leading-[1.6] text-fg lg:mt-7 lg:space-y-6 lg:text-[18px]">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <ul>
          {about.points.map((point) => (
            <li key={point.label} className="border-t border-line pb-3.5 pt-3 lg:py-6">
              <h3 className="label">{point.label}</h3>
              <p className="mt-1 text-[15px] leading-[1.55] text-fg lg:mt-2 lg:text-[17px] lg:leading-[1.6]">
                {point.text}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Education row: degree and year in the label style, school set large. */}
      <div className="mt-10 lg:mt-12">
        <h3 id="education-label" className="label mb-4">
          {about.educationLabel}
        </h3>
        <ul
          aria-labelledby="education-label"
          className="grid lg:grid-cols-2 lg:gap-x-12"
        >
          {education.map((item) => (
            <li key={item.school} className="border-t border-line py-6 lg:pb-8 lg:pt-[22px]">
              <p className="label">
                {item.degree} · {item.year}
              </p>
              <h4 className="mt-1.5 text-[22px] font-extrabold leading-[1.05] tracking-[-0.03em] [font-stretch:115%] lg:text-[34px]">
                {item.school}
              </h4>
              <p className="mt-3 text-[16px] leading-[1.5] text-muted">
                {item.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
