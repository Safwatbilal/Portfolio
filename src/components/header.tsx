"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/content/types";
import { profile } from "@/content/shared";
import { swapLocale, type Locale } from "@/i18n/config";
import { Icon } from "./icons";
import { Wordmark } from "./logo";
import { ThemeToggle } from "./theme-toggle";

const sections = ["experience", "work", "about", "contact"] as const;
type Section = (typeof sections)[number];

export function Header({ locale, nav, name }: { locale: Locale; nav: Dictionary["nav"]; name: string }) {
  const pathname = usePathname();
  const isHome = pathname === `/${locale}`;
  const active = useActiveSection(isHome);
  const other: Locale = locale === "en" ? "ar" : "en";
  // Carry the section in view across the switch, so the reader lands where they were.
  const otherHref = swapLocale(pathname, other) + (isHome && active ? `#${active}` : "");

  const items = sections.map((id) => ({ id, href: `/${locale}#${id}`, label: nav[id] }));

  // After a language switch the page reflows (other script, other line lengths), so Next's
  // own hash scroll can land a section off. Jump to the carried section once the new page is in.
  useEffect(() => {
    const el = location.hash && document.getElementById(location.hash.slice(1));
    if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
  }, [locale]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/85 backdrop-blur-md">
      <div className="container-page flex h-14 items-center justify-between gap-3 md:h-16 md:gap-4">
        <Link href={`/${locale}`} aria-label={nav.home} className="shrink-0 rounded-md whitespace-nowrap">
          <Wordmark name={name} animated />
        </Link>

        <nav aria-label={nav.menu} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {items.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  aria-current={isHome && active === item.id ? "location" : undefined}
                  className="rounded-md px-3 py-2 text-[0.9375rem] font-medium text-ink-2 transition-colors hover:text-ink aria-[current]:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <Link
            href={otherHref}
            hrefLang={other}
            lang={other}
            scroll={!(isHome && active)}
            className="inline-flex min-h-10 items-center gap-1.5 rounded-[10px] px-2 text-sm font-semibold text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink sm:px-2.5"
          >
            <Icon name="languages" size={18} />
            <span aria-hidden="true" className="sm:hidden">{other === "ar" ? "ع" : "EN"}</span>
            <span className="sr-only sm:not-sr-only">{nav.switchTo}</span>
          </Link>
          <ThemeToggle label={nav.toggleTheme} />
          <a
            href={profile.cvPath}
            download
            className="inline-flex min-h-10 items-center gap-1.5 rounded-[10px] border border-line px-2.5 text-sm font-semibold text-ink transition-colors hover:bg-surface-2 sm:px-3"
          >
            <span className="hidden sm:inline">{nav.cv}</span>
            <span className="sm:hidden">CV</span>
            <Icon name="download" size={16} />
            <span className="sr-only">{nav.cvNote}</span>
          </a>
        </div>
      </div>

      {/* Mobile: the four sections as a tab row instead of a hidden menu. */}
      <nav aria-label={nav.menu} className="border-t border-line/60 md:hidden">
        <ul className="container-page grid grid-cols-4">
          {items.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                aria-current={isHome && active === item.id ? "location" : undefined}
                className="relative flex h-11 items-center justify-center text-sm font-medium text-ink-2 transition-colors hover:text-ink aria-[current]:text-ink aria-[current]:after:absolute aria-[current]:after:inset-x-3 aria-[current]:after:bottom-0 aria-[current]:after:h-0.5 aria-[current]:after:rounded-full aria-[current]:after:bg-accent"
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

/** The section whose heading was last scrolled past the header, or null above the first one. */
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<Section | null>(null);

  useEffect(() => {
    if (!enabled) return setActive(null);
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) + 8 || 120;
      let current: Section | null = null;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
    };
  }, [enabled]);

  return active;
}
