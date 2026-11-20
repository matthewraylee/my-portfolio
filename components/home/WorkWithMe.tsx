import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/content/site";

const cardClass = "block h-full rounded-md border border-line bg-surface p-5 lg:p-7";

/** Rendered only when features.workWithMe is on (see app/page.tsx). */
export function WorkWithMe() {
  const { workWithMe, email } = site;

  return (
    <section
      id="work-with-me"
      aria-labelledby="work-with-me-label"
      className="wrap section-space"
    >
      <SectionLabel id="work-with-me-label">{workWithMe.label}</SectionLabel>

      <h3 className="type-h2 max-w-[820px]">{workWithMe.heading}</h3>

      {/* Three lines per card: title, outcome, short body. A card with a
          project behind it is one link to that page; otherwise a plain box. */}
      <ul className="mt-8 grid gap-3 lg:mt-10 lg:grid-cols-3 lg:gap-4">
        {workWithMe.offers.map((offer) => {
          const content = (
            <>
              <h4 className="flex items-center justify-between gap-4 text-[20px] font-bold leading-tight tracking-[-0.02em] lg:text-[24px]">
                {offer.title}
                {offer.project && (
                  <ArrowRight
                    size={18}
                    strokeWidth={1.75}
                    aria-hidden="true"
                    className="shrink-0 text-accent transition-transform group-hover:translate-x-1"
                  />
                )}
              </h4>
              <p className="mt-2 text-[17px] font-semibold leading-[1.35] text-fg lg:mt-3 lg:text-[19px] lg:leading-[1.4]">
                {offer.outcome}
              </p>
              <p className="mt-2.5 text-[15px] leading-[1.55] text-muted lg:mt-3 lg:text-[16px] lg:leading-[1.6]">
                {offer.body}
              </p>
            </>
          );

          return (
            <li key={offer.title}>
              {offer.project ? (
                <Link
                  href={`/work/${offer.project}`}
                  className={`${cardClass} group transition-colors hover:border-fg`}
                >
                  {content}
                </Link>
              ) : (
                <div className={cardClass}>{content}</div>
              )}
            </li>
          );
        })}
      </ul>

      <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-[17px] leading-[1.5] text-muted">
          {workWithMe.referral}
        </p>
        <ButtonLink href={`mailto:${email}`} className="w-full lg:w-auto">
          {workWithMe.cta}
        </ButtonLink>
      </div>
    </section>
  );
}
