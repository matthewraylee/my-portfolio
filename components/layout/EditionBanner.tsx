const EditionBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 h-12 sm:h-8 flex items-center justify-center bg-muted border-b px-4 text-center text-xs sm:text-sm text-muted-foreground leading-tight">
      <p>
        You&apos;re viewing Edition No. 00 (2025), an archived version of this
        site.{" "}
        <a
          href="https://matthewraylee.com"
          className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
        >
          See the current edition →
        </a>
      </p>
    </div>
  );
};

export default EditionBanner;
