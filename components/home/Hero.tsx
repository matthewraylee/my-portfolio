import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { Placeholder } from "@/components/ui/Placeholder";
import { site } from "@/content/site";

export function Hero() {
  const { hero, status, edition } = site;

  return (
    <section
      aria-labelledby="hero-heading"
      className="wrap section-space pt-10 lg:pt-14"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_500px] lg:items-center lg:gap-[56px]">
        <div>
          {/* Mobile shows the edition here, since the header has no room. */}
          <p className="label mb-6 lg:mb-8">
            <span className="lg:hidden">{edition.label}</span>
            <span className="hidden lg:inline">{hero.label}</span>
          </p>

          <h1 id="hero-heading" className="type-h1 chrome-text">
            {hero.headline}
          </h1>

          <p className="mt-8 max-w-[560px] text-[17px] leading-[1.6] text-muted lg:text-[19px]">
            {hero.subhead}
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-6">
            <ButtonLink href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink
              href={hero.secondaryCta.href}
              variant="secondary"
              className="self-center sm:self-auto"
            >
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>

          <p className="mt-8 flex max-w-[620px] gap-3 text-[17px] leading-[1.5] text-fg lg:text-[15px]">
            <span
              aria-hidden="true"
              className="mt-[0.5em] size-2 shrink-0 rounded-full bg-accent"
            />
            <span>
              {status.location}. {status.detail}
            </span>
          </p>
        </div>

        <Placeholder
          alt={hero.cover.alt}
          caption={hero.cover.caption}
          className="aspect-square rounded-md border border-line"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Logo
              variant="chrome"
              gradientId="logo-chrome-hero"
              className="relative w-[62%]"
            />
          </div>
        </Placeholder>
      </div>
    </section>
  );
}
