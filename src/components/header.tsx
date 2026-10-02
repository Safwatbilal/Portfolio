"use client";

import Link from "next/link";
import { useRef } from "react";
import { profile } from "@/content/profile";
import { Icon } from "./icons";
import { Wordmark } from "./logo";
import { ThemeToggle } from "./theme-toggle";

const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  // Native <dialog> gives us focus trapping, Esc-to-close and focus return.
  const menu = useRef<HTMLDialogElement>(null);
  const close = () => menu.current?.close();

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="Safwat Bilal, home" className="rounded-md">
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
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
          <ThemeToggle />
          <a
            href={profile.cvPath}
            download
            className="inline-flex min-h-10 items-center gap-1.5 rounded-[10px] border border-line px-3 text-sm font-semibold text-ink transition-colors hover:bg-surface-2"
          >
            CV
            <Icon name="download" size={16} />
            <span className="sr-only">(PDF)</span>
          </a>
          <button
            type="button"
            onClick={() => menu.current?.showModal()}
            className="inline-flex size-10 items-center justify-center rounded-[10px] text-ink hover:bg-surface-2 md:hidden"
            aria-label="Open menu"
            aria-haspopup="dialog"
          >
            <Icon name="menu" />
          </button>
        </div>
      </div>

      <dialog
        ref={menu}
        aria-label="Menu"
        onClick={(e) => e.target === menu.current && close()}
        className="m-0 mt-0 h-dvh max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-ink/30 md:hidden"
      >
        <div className="border-b border-line bg-surface shadow-[0_8px_24px_-12px_rgb(20_23_31/0.18)]">
          <div className="container-page flex h-16 items-center justify-between">
            <Wordmark />
            <button
              type="button"
              onClick={close}
              className="inline-flex size-10 items-center justify-center rounded-[10px] text-ink hover:bg-surface-2"
              aria-label="Close menu"
            >
              <Icon name="x" />
            </button>
          </div>
          <nav aria-label="Mobile" className="container-page pb-6">
            <ul className="divide-y divide-line">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    className="flex items-center justify-between py-4 text-xl font-semibold text-ink"
                  >
                    {item.label}
                    <Icon name="arrowRight" className="text-ink-3" />
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
