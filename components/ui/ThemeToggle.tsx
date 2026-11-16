"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/** 44px sun/moon toggle. Night shows the sun (switch to day), day shows the moon. */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDay = mounted && resolvedTheme === "light";
  const label = isDay ? "Switch to night mode" : "Switch to day mode";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDay ? "dark" : "light")}
      aria-label={label}
      title={label}
      className="inline-flex size-11 shrink-0 items-center justify-center rounded-[2px] border border-line text-fg transition-colors hover:border-fg"
    >
      {/* Render nothing until mounted so the icon always matches the theme. */}
      {mounted &&
        (isDay ? (
          <Moon size={18} strokeWidth={1.75} aria-hidden="true" />
        ) : (
          <Sun size={18} strokeWidth={1.75} aria-hidden="true" />
        ))}
    </button>
  );
}
