import Link from "next/link";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { profile } from "@/content/shared";
import { Icon } from "./icons";
import { ExternalLink } from "./ui";

export function Footer({ d, locale }: { d: Dictionary; locale: Locale }) {
  const base = `/${locale}`;
  const pages = [
    { href: `${base}/about`, label: d.nav.about },
    { href: `${base}/experience`, label: d.nav.experience },
    { href: `${base}/expertise`, label: d.nav.expertise },
    { href: `${base}/work`, label: d.nav.work },
    { href: `${base}/contact`, label: d.nav.contact },
  ];
  return (
    <footer className="foot">
      <div className="foot-in">
        <div className="foot-grid">
          <div>
            <p className="thanks">{d.footer.thanks}</p>
            <p>{d.nav.tagline}</p>
            <p style={{ marginTop: 22 }}>
              <Link className="btn btn-red" href={`${base}/contact`}>
                {d.nav.contact} <Icon name="arrowUpRight" className="ico go" />
              </Link>
            </p>
          </div>
          <nav aria-labelledby="f-pages">
            <h2 id="f-pages">{d.footer.pages}</h2>
            <ul>
              {pages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href}>{p.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-labelledby="f-else">
            <h2 id="f-else">{d.footer.elsewhere}</h2>
            <ul>
              <li>
                <a href={`mailto:${profile.email}`}>{d.footer.email}</a>
              </li>
              <li>
                <ExternalLink href={profile.links.linkedin} newTab={d.nav.newTab} showIcon={false}>
                  LinkedIn
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href={profile.links.github} newTab={d.nav.newTab} showIcon={false}>
                  GitHub
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href={profile.links.instagram} newTab={d.nav.newTab} showIcon={false}>
                  Instagram
                </ExternalLink>
              </li>
              <li>
                <a href={profile.cvPath} download>
                  {d.nav.cv} <span className="sr-only">{d.nav.cvNote}</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="foot-bottom">
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <div className="socials">
            <a href={`mailto:${profile.email}`} aria-label={d.footer.email}>
              <Icon name="mail" className="ico" />
            </a>
            <ExternalLink href={profile.links.linkedin} newTab={d.nav.newTab} showIcon={false} aria-label="LinkedIn">
              <Icon name="linkedin" className="ico" />
            </ExternalLink>
            <ExternalLink href={profile.links.github} newTab={d.nav.newTab} showIcon={false} aria-label="GitHub">
              <Icon name="github" className="ico" />
            </ExternalLink>
            <ExternalLink href={profile.links.instagram} newTab={d.nav.newTab} showIcon={false} aria-label="Instagram">
              <Icon name="instagram" className="ico" />
            </ExternalLink>
          </div>
          <a className="to-top" href="#top">
            {d.footer.top} <Icon name="arrowUp" className="ico" />
          </a>
        </div>
      </div>
    </footer>
  );
}
