import { ButtonLink } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/content/site";

/** Rendered only when features.workWithMe is on (see app/page.tsx). */
export function WorkWithMe() {
  const { workWithMe, email } = site;

  return (
    <section
      id="work-with-me"
      aria-labelledby="work-with-me-label"
      className="wrap section-space"
    >
      <SectionLabel id="work-with-me-label">work with me</SectionLabel>

      <h3 className="type-h2 max-w-[760px]">{workWithMe.heading}</h3>

      <ul className="mt-8 grid gap-4 lg:mt-10 lg:grid-cols-3">
        {workWithMe.offers.map((offer, i) => (
          <li
            key={offer.title}
            className="rounded-md border border-line bg-surface p-6 lg:p-7"
          >
            <span className="label">{String(i + 1).padStart(2, "0")}</span>
            <h4 className="mt-2 text-[22px] font-bold leading-tight tracking-[-0.02em]">
              {offer.title}
            </h4>
            <p className="mt-3 text-[16px] leading-[1.6] text-muted">
              {offer.text}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-[17px] leading-[1.5] text-muted">
          {workWithMe.referral}
        </p>
        <ButtonLink href={`mailto:${email}`}>start a conversation</ButtonLink>
      </div>
    </section>
  );
}
