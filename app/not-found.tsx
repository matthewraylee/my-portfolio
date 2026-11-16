import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <section className="wrap section-space pt-16 lg:pt-24">
      <p className="label mb-6">404</p>
      <h1 className="type-h2 max-w-[760px]">{site.notFound.heading}</h1>
      <ButtonLink href="/" className="mt-10">
        go home
      </ButtonLink>
    </section>
  );
}
