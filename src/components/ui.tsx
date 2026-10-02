import Image from "next/image";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Icon } from "./icons";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[10px] min-h-11 px-4 text-[0.9375rem] font-semibold transition-[background-color,border-color,transform] duration-150 ease-brand active:scale-[0.98]";

export const buttonStyles = {
  primary: `${base} bg-accent text-on-accent hover:bg-accent-hover`,
  secondary: `${base} border border-line text-ink hover:bg-surface-2`,
};

/** Directional arrow that points "forward" in both LTR and RTL. */
export function ForwardArrow({ size = 18, className = "" }: { size?: number; className?: string }) {
  return <Icon name="arrowRight" size={size} className={`rtl:-scale-x-100 ${className}`} />;
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
      {showIcon && <Icon name="arrowUpRight" size={16} className="shrink-0 rtl:-scale-x-100" />}
      <span className="sr-only"> {newTab}</span>
    </a>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span
      dir="ltr"
      className="inline-flex items-center rounded-md bg-accent-soft px-2 py-0.5 text-[0.8125rem] font-medium text-accent-ink"
    >
      {children}
    </span>
  );
}

export function LiveBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-ok">
      <span className="relative flex size-1.5" aria-hidden="true">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-ok opacity-60 motion-reduce:hidden" />
        <span className="relative inline-flex size-1.5 rounded-full bg-ok" />
      </span>
      {label}
    </span>
  );
}

export function ProjectLogo({ src, alt, size = 40 }: { src: string; alt: string; size?: number }) {
  return (
    <span
      className="grid shrink-0 place-items-center rounded-xl border border-line bg-white p-1.5"
      style={{ width: size, height: size }}
    >
      <Image src={src} alt={alt} width={size - 12} height={size - 12} className="h-full w-full object-contain" />
    </span>
  );
}

export function SectionHeader({
  id,
  eyebrow,
  title,
  intro,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl md:mb-14">
      <p className="label mb-3">{eyebrow}</p>
      <h2 id={id} className="h2">
        {title}
      </h2>
      {intro && <p className="lead mt-3">{intro}</p>}
    </div>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-1.5 font-semibold text-accent-ink">
      {children}
      <ForwardArrow className="transition-transform duration-150 ease-brand group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
    </Link>
  );
}
