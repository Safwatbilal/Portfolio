"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/content/types";
import { swapLocale, type Locale } from "@/i18n/config";
import { Icon } from "./icons";
import { SoundToggle } from "./sound";

type Key = "home" | "about" | "experience" | "expertise" | "work" | "contact";

export function Header({ locale, nav, name }: { locale: Locale; nav: Dictionary["nav"]; name: string }) {
  const pathname = usePathname();
  const other: Locale = locale === "en" ? "ar" : "en";
  const [open, setOpen] = useState(false);
  const menuBtn = useRef<HTMLButtonElement>(null);

  const base = `/${locale}`;
  const label: Record<Key, string> = {
    home: nav.homeShort,
    about: nav.about,
    experience: nav.experience,
    expertise: nav.expertise,
    work: nav.work,
    contact: nav.contact,
  };
  const href = (k: Key) => (k === "home" ? base : `${base}/${k}`);
  const isActive = (k: Key) => (k === "home" ? pathname === base : pathname.startsWith(href(k)));
  const main: Key[] = ["home", "about", "experience", "expertise", "work"];

  // Close the drawer on Escape (links close it on click), and when the layout grows past the breakpoint.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuBtn.current?.focus();
      }
    };
    const onResize = () => innerWidth > 1180 && setOpen(false);
    document.body.style.overflow = "hidden";
    addEventListener("keydown", onKey);
    addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      removeEventListener("keydown", onKey);
      removeEventListener("resize", onResize);
    };
  }, [open]);

  const otherName = other === "ar" ? "العربية" : "English";
  const lang = (extra = "", full = false) => (
    <Link
      href={swapLocale(pathname, other)}
      hrefLang={other}
      lang={other}
      className={`lang-switch ${extra}`}
      title={full ? undefined : otherName}
    >
      {full ? otherName : nav.switchTo}
    </Link>
  );

  return (
    <>
      <header className="top" id="top">
        <div className="top-in">
          <Link href={base} className="brand" aria-label={nav.home}>
            <span className="brand-name">{name}</span>
            <span className="brand-tag">{locale === "ar" ? "مهندس برمجيات" : "Software engineer"}</span>
          </Link>
          <nav className="nav" aria-label={nav.menu}>
            {main.map((k) => (
              <Link key={k} href={href(k)} aria-current={isActive(k) ? "page" : undefined}>
                <span>{label[k]}</span>
              </Link>
            ))}
          </nav>
          <SoundToggle locale={locale} />
          {lang()}
          <Link
            className="btn btn-red top-cta"
            href={href("contact")}
            aria-current={isActive("contact") ? "page" : undefined}
          >
            {label.contact} <Icon name="arrowUpRight" className="ico go" />
          </Link>
          <button
            ref={menuBtn}
            className="menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="menu"
            aria-label={nav.openMenu}
            onClick={() => setOpen(true)}
          >
            <Icon name="menu" className="ico" />
          </button>
        </div>
      </header>

      {/* Mobile menu: a paper panel dropped onto the board */}
      <div className={`menu${open ? " is-open" : ""}`} id="menu" role="dialog" aria-modal="true" aria-label={nav.menu} hidden={!open}>
        <div className="menu-scrim" onClick={() => setOpen(false)} />
        <div className="menu-panel">
          <div className="menu-head">
            <span className="brand-name">{name}</span>
            <button className="menu-close" type="button" aria-label={nav.closeMenu} onClick={() => setOpen(false)}>
              <Icon name="x" className="ico" />
            </button>
          </div>
          <ul className="menu-links">
            {([...main, "contact"] as Key[]).map((k) => (
              <li key={k}>
                <Link href={href(k)} aria-current={isActive(k) ? "page" : undefined} onClick={() => setOpen(false)}>
                  <span>{label[k]}</span>
                  <Icon name="arrowRight" className="ico" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="menu-foot">{lang("lang-switch-menu", true)}</div>
        </div>
      </div>
    </>
  );
}
