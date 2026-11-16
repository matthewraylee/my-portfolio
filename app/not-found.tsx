import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/content/site";

export default function NotFound() {
  const { notFound } = site;

  return (
    <section className="wrap section-space pt-16 lg:pt-24">
      <p className="label mb-6">{notFound.label}</p>
      <h1 className="type-h2 max-w-[760px]">{notFound.heading}</h1>
      <ButtonLink href="/" className="mt-10">
        {notFound.cta}
      </ButtonLink>
    </section>
  );
}
