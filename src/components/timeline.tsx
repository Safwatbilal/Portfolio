import Link from "next/link";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";

/** Dotted timeline of roles; the current one gets the highlighter dot. */
export function Timeline({ items, d, locale }: { items: Dictionary["experience"]["items"]; d: Dictionary; locale: Locale }) {
  return (
    <ol className="tl">
      {items.map((e, i) => (
        <li key={`${e.company}-${e.period}`} className={`rv${i < 2 ? " now" : ""}`}>
          <span className="mk" aria-hidden="true" />
          <span className="tl-date">{e.period}</span>
          <h3 className="tl-title">{e.role}</h3>
          <p className="tl-org">
            {e.company} <span className="mark">{e.place}</span>
          </p>
          <p className="tl-sum">{e.summary}</p>
          {e.caseStudy && (
            <Link className="link" href={`/${locale}/work/${e.caseStudy}`}>
              {d.experience.caseStudy}
              <span className="sr-only">: {e.company}</span>
            </Link>
          )}
        </li>
      ))}
    </ol>
  );
}
