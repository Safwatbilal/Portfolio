"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import type { Dictionary } from "@/content/types";
import { profile } from "@/content/shared";
import { swapLocale, type Locale } from "@/i18n/config";
import { Icon } from "./icons";
import { Wordmark } from "./logo";
import { ThemeToggle } from "./theme-toggle";

export function Header({ locale, nav, name }: { locale: Locale; nav: Dictionary["nav"]; name: string }) {
  // Native <dialog> gives us focus trapping, Esc-to-close and focus return.
  const menu = useRef<HTMLDialogElement>(null);
  const close = () => menu.current?.close();
  const pathname = usePathname();
  const other: Locale = locale === "en" ? "ar" : "en";
  const otherHref = swapLocale(pathname, other);

  const items = [
    { href: `/${locale}#experience`, label: nav.experience },
    { href: `/${locale}#work`, label: nav.work },
    { href: `/${locale}#about`, label: nav.about },
    { href: `/${locale}#contact`, label: nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href={`/${locale}`} aria-label={nav.home} className="rounded-md">
          <Wordmark name={name} animated />
        </Link>

        <nav aria-label={nav.menu} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-2 text-[0.9375rem] font-medium text-ink-2 transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <LangLink href={otherHref} locale={other} label={nav.switchTo} short={other === "ar" ? "ع" : "EN"} className="inline-flex min-h-10 items-center gap-1.5 rounded-[10px] px-2 text-sm font-semibold text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink sm:px-2.5" />
          <ThemeToggle label={nav.toggleTheme} />
          <a
            href={profile.cvPath}
            download
            className="inline-flex min-h-10 items-center gap-1.5 rounded-[10px] border border-line px-3 text-sm font-semibold text-ink transition-colors hover:bg-surface-2"
          >
            <span className="hidden sm:inline">{nav.cv}</span>
            <span className="sm:hidden">CV</span>
            <Icon name="download" size={16} />
            <span className="sr-only">{nav.cvNote}</span>
          </a>
          <button
            type="button"
            onClick={() => menu.current?.showModal()}
            className="inline-flex size-10 items-center justify-center rounded-[10px] text-ink hover:bg-surface-2 md:hidden"
            aria-label={nav.openMenu}
            aria-haspopup="dialog"
          >
            <Icon name="menu" />
          </button>
        </div>
      </div>

      <dialog
        ref={menu}
        aria-label={nav.menu}
        onClick={(e) => e.target === menu.current && close()}
        className="m-0 h-dvh max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-ink/30 md:hidden"
      >
        <div className="border-b border-line bg-surface shadow-[0_8px_24px_-12px_rgb(20_23_31/0.18)]">
          <div className="container-page flex h-16 items-center justify-between">
            <Wordmark name={name} />
            <button
              type="button"
              onClick={close}
              className="inline-flex size-10 items-center justify-center rounded-[10px] text-ink hover:bg-surface-2"
              aria-label={nav.closeMenu}
            >
              <Icon name="x" />
            </button>
          </div>
          <nav aria-label={nav.menu} className="container-page pb-6">
            <ul className="divide-y divide-line">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    className="flex items-center justify-between py-4 text-xl font-semibold text-ink"
                  >
                    {item.label}
                    <Icon name="arrowRight" className="text-ink-3 rtl:-scale-x-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </dialog>
    </header>
  );
}

function LangLink({
  href,
  locale,
  label,
  short,
  className,
}: {
  href: string;
  locale: Locale;
  label: string;
  // Compact label for narrow screens; the full name stays available to screen readers.
  short?: string;
  className: string;
}) {
  // A plain <a> on purpose: a client-side switch re-renders <html> from the server,
  // which drops the saved data-theme and keeps the old scroll offset in a page whose
  // length has changed. A full load runs the theme script before paint and starts at the top.
  return (
    <a href={href} hrefLang={locale} lang={locale} className={className}>
      <Icon name="languages" size={18} />
      {short ? (
        <>
          <span aria-hidden="true" className="sm:hidden">{short}</span>
          <span className="sr-only sm:not-sr-only">{label}</span>
        </>
      ) : (
        label
      )}
    </a>
  );
}
