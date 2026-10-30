import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { Icon } from "./icons";
import { LiveBadge, Tag } from "./ui";

/** A taped print: first real screenshot (or the logo on paper), title, my part, tags. */
export function WorkCard({ p, d, locale }: { p: Project; d: Dictionary; locale: Locale }) {
  const shot = p.screenshots.find((s) => !s.phone) ?? p.screenshots[0];
  return (
    <article className="wcard" data-tilt3d="6">
      <span className="tape yellow" aria-hidden="true" />
      <span className="curl" aria-hidden="true" />
      <div className="ph">
        {shot ? (
          <Image
            src={shot.src}
            alt=""
            width={shot.width}
            height={shot.height}
            sizes="(min-width: 960px) 30vw, (min-width: 720px) 45vw, 90vw"
            className="shot"
          />
        ) : (
          <span className="logo-tile">
            <Image src={p.logo} alt="" width={52} height={52} className="h-full w-full object-contain" />
          </span>
        )}
        <span className="glare" aria-hidden="true" />
      </div>
      <div className="wcard-body">
        <div className="wcard-top">
          <span className="mono-index">{p.index}</span>
          <LiveBadge label={d.work.live} />
        </div>
        <h3>{p.name}</h3>
        <p>{p.oneLiner}</p>
        <p>
          <b>{d.work.myPart} </b>
          {p.myPart}
        </p>
        <ul className="chips" aria-label={d.work.technologies}>
          {p.tags.map((t) => (
            <li key={t}>
              <Tag>{t}</Tag>
            </li>
          ))}
        </ul>
        <Link href={`/${locale}/work/${p.slug}`} className="more stretch">
          {d.work.readCase}
          <span className="sr-only">: {p.name}</span>
          <Icon name="arrowRight" className="ico" />
        </Link>
      </div>
    </article>
  );
}
