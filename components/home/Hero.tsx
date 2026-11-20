import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/content/site";

/**
 * Hero, cutout layout A2 (Nov 20). Layers: haze (z 0) < cutout (z 1) <
 * text (z 2); the grain overlay covers everything. Sizes and positions live
 * in the hero-* utilities in app/globals.css.
 */
export function Hero() {
  const { hero, status } = site;

  return (
    <section
      aria-labelledby="hero-heading"
      className="hero wrap section-space pt-[52px] md:pt-[112px]"
    >
      <div className="hero-stage">
        <div aria-hidden="true" className="hero-haze" />
        <Image
          src={hero.cutout.src}
          width={hero.cutout.width}
          height={hero.cutout.height}
          alt={hero.cutout.alt}
          priority
          sizes="(min-width: 768px) 452px, 300px"
          className="hero-cutout h-auto"
        />

        <p className="label hero-label relative z-[2]">{hero.label}</p>
        <h1 id="hero-heading" className="hero-h1 chrome-text mt-4 md:mt-[18px]">
          {hero.headline}
        </h1>
      </div>

      <div className="hero-column">
        <p className="mt-5 text-[17px] leading-[1.6] text-muted md:mt-10 md:text-[19px]">
          {hero.subhead}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 md:mt-8">
          <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
          <ButtonLink href={hero.secondaryCta.href} variant="secondary">
            {hero.secondaryCta.label}
          </ButtonLink>
        </div>

        <p className="mt-6 flex gap-3 text-[16px] leading-[1.5] text-fg md:mt-8 md:text-[15px]">
          <span
            aria-hidden="true"
            className="mt-[0.5em] size-2 shrink-0 rounded-full bg-accent"
          />
          <span>
            {status.location}. {status.detail}
          </span>
        </p>
      </div>
    </section>
  );
}
