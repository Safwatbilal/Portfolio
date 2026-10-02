"use client";

import { useLayoutEffect } from "react";
import { Icon } from "./icons";

// The initial theme is applied by the inline script in layout.tsx before paint.
// The icon swap is CSS-driven (see `.theme-icon-*`), so there's no hydration mismatch.
export function ThemeToggle({ label }: { label: string }) {
  // Switching language swaps the root layout client-side, which renders a fresh <html>
  // without data-theme; re-apply the saved choice before that frame paints.
  useLayoutEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "dark" || saved === "light") document.documentElement.dataset.theme = saved;
    } catch {}
  }, []);

  function toggle() {
    const root = document.documentElement;
    const isDark =
      root.dataset.theme === "dark" ||
      (!root.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
    const next = isDark ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex size-10 items-center justify-center rounded-[10px] text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
      aria-label={label}
    >
      <Icon name="moon" className="theme-icon-moon" />
      <Icon name="sun" className="theme-icon-sun" />
    </button>
  );
}
