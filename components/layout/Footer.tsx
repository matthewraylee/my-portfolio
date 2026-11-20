import { Logo } from "@/components/ui/Logo";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1296px] border-t border-line">
      <div className="wrap flex flex-col gap-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:py-11">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-4">
          <Logo className="w-[40px] text-muted" />
          <p className="text-[14px] leading-[1.6] text-muted lg:text-[14px]">
            {site.edition.builtLine}
            <br />
            {site.edition.copyright}
          </p>
        </div>

        <a
          href={site.edition.previous.href}
          className="inline-flex min-h-11 items-center self-start text-[14px] text-muted underline decoration-underline underline-offset-4 transition-colors hover:text-fg hover:decoration-fg lg:self-auto"
        >
          {site.edition.previous.label}&nbsp;→
        </a>
      </div>
    </footer>
  );
}
