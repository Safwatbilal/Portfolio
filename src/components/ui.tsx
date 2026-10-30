import Image from "next/image";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Icon } from "./icons";

/** Button class names for plain <a>/<Link> elements. */
export const buttonStyles = {
  primary: "btn btn-red",
  secondary: "btn btn-line",
};

/** Hand-drawn paper clip, shared by the sheet and the portrait card. */
export function PaperClip({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 34 104" aria-hidden="true">
      <path
        d="M11 30v52a6 6 0 0 0 12 0V17a10.5 10.5 0 0 0-21 0v70a15 15 0 0 0 30 0V34"
        fill="none"
        stroke="url(#steel)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** The sheet of paper every page is printed on. `tilt` varies the angle per page. */
export function Sheet({ page, tilt, children }: { page?: string; tilt?: "b" | "c"; children: ReactNode }) {
  return (
    <main id="main" tabIndex={-1}>
      <article className="sheet" data-page={page} data-tilt={tilt}>
        <PaperClip className="clip" />
        {children}
      </article>
    </main>
  );
}

/** Breadcrumb + page title (highlighter) + lead + a red handwritten margin note. */
export function PageHead({
  crumbs,
  title,
  lead,
  note,
  titleId = "page-title",
}: {
  crumbs: { label: string; href?: string }[];
  title: string;
  lead?: string;
  note?: string;
  titleId?: string;
}) {
  return (
    <>
      <nav className="crumbs" aria-label="Breadcrumb">
        {crumbs.map((c, i) => (
          <span key={c.label} className="contents">
            {i > 0 && <Icon name="chevronRight" className="ico" />}
            {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
          </span>
        ))}
      </nav>
      <header className="page-head grid items-end gap-[var(--gap)] md:grid-cols-[minmax(0,1fr)_minmax(0,290px)]">
        <div className="hero-in">
          <h1 id={titleId} tabIndex={-1}>
            <span className="hl">{title}</span>
          </h1>
          {lead && <p className="lead">{lead}</p>}
        </div>
        {note && <MarginNote>{note}</MarginNote>}
      </header>
    </>
  );
}

/** Red handwritten note with a hand-drawn arrow that draws itself in. */
export function MarginNote({ children }: { children: ReactNode }) {
  return (
    <p className="note rv">
      {children}
      <svg className="doodle draw mt-1.5 h-12 w-[92px]" viewBox="0 0 96 50" aria-hidden="true">
        <path pathLength="100" d="M6 8c10 20 30 30 52 28 12-1 22-6 30-12" />
        <path pathLength="100" d="M78 16l11 7-12 6" />
      </svg>
    </p>
  );
}

/** Directional arrow that points "forward" in both LTR and RTL (flipped in CSS). */
export function ForwardArrow({ className = "" }: { className?: string }) {
  return <Icon name="arrowRight" className={`ico fwd ${className}`} />;
}

/** External link: opens in a new tab and says so to screen readers. */
export function ExternalLink({
  href,
  children,
  className,
  newTab,
  showIcon = true,
  ...props
}: ComponentProps<"a"> & { newTab: string; showIcon?: boolean }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props}>
      {children}
      {showIcon && <Icon name="arrowUpRight" className="ico go" />}
      <span className="sr-only"> {newTab}</span>
    </a>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span dir="ltr" className="chip">
      {children}
    </span>
  );
}

export function LiveBadge({ label }: { label: string }) {
  return (
    <span className="badge">
      <Icon name="check" className="ico" style={{ width: 13, height: 13 }} />
      {label}
    </span>
  );
}

export function ProjectLogo({ src, alt, size = 40 }: { src: string; alt: string; size?: number }) {
  return (
    <span
      className="grid shrink-0 place-items-center rounded-xl bg-white p-1.5 shadow-[var(--sh-card)]"
      style={{ width: size, height: size }}
    >
      <Image src={src} alt={alt} width={size - 12} height={size - 12} className="h-full w-full object-contain" />
    </span>
  );
}

/** Section title with a highlighter swipe that draws in on scroll. */
export function SectionHeader({
  id,
  eyebrow,
  title,
  intro,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="sec-head">
      {eyebrow && <p className="mono sec-eyebrow">{eyebrow}</p>}
      <h2 id={id} className="h2">
        <span className="hl hl-draw">{title}</span>
      </h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="link">
      {children}
      <ForwardArrow />
    </Link>
  );
}
