"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navItems } from "@/lib/nav";
import { site } from "@/content/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="relative z-40 border-b border-line lg:border-b-0">
      <div className="wrap flex items-center justify-between gap-6 py-4 lg:py-7">
        <Link
          href="/"
          className="flex min-h-11 items-center gap-4"
          aria-label={`${site.name}, home`}
        >
          <Logo
            variant="chrome"
            gradientId="logo-chrome-header"
            className="w-[43px] lg:w-[51px]"
          />
          <span className="label hidden md:inline">{site.headerLabel}</span>
        </Link>

        <div className="flex items-center gap-3 lg:gap-7">
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-[15px] text-fg transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <span className="label hidden xl:inline">{site.edition.label}</span>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center rounded-[2px] border border-line text-fg transition-colors hover:border-fg lg:hidden"
          >
            {menuOpen ? (
              <X size={20} strokeWidth={1.75} aria-hidden="true" />
            ) : (
              <Menu size={20} strokeWidth={1.75} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu (not in the renders): a simple panel under the header. */}
      <nav
        id="mobile-menu"
        aria-label="Main"
        hidden={!menuOpen}
        className="absolute inset-x-0 top-full border-b border-line bg-bg lg:hidden"
      >
        <ul className="wrap py-2">
          {navItems.map((item) => (
            <li key={item.href} className="border-b border-line last:border-b-0">
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-14 items-center text-[20px] font-semibold tracking-[-0.01em] text-fg"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
