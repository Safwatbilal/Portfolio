import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icons";
import { ExternalLink, PageHead, Sheet } from "@/components/ui";
import { getDictionary } from "@/content";
import { profile } from "@/content/shared";
import { isLocale } from "@/i18n/config";

export async function generateMetadata(props: PageProps<"/[locale]/about">): Promise<Metadata> {
  const { locale } = await props.params;
  if (!isLocale(locale)) return {};
  return {
    title: getDictionary(locale).nav.about,
    alternates: { canonical: `/${locale}/about`, languages: { en: "/en/about", ar: "/ar/about" } },
  };
}

export default async function About(props: PageProps<"/[locale]/about">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const d = getDictionary(locale);
  return (
    <Sheet tilt="b">
      <PageHead
        titleId="about-title"
        crumbs={[{ label: d.nav.homeShort, href: `/${locale}` }, { label: d.nav.about }]}
        title={d.about.title}
        lead={d.hero.heading}
        note={d.nav.pageNotes.about}
      />
      <div className="about-grid" style={{ marginTop: "clamp(40px,5vw,64px)" }}>
        <div className="prose rv">
          {d.about.paragraphs.map((t) => (
            <p key={t.slice(0, 24)}>{t}</p>
          ))}
        </div>
        <div className="card rv" style={{ ["--dl" as string]: "120ms" }}>
          <span className="tape yellow" aria-hidden="true" style={{ insetInlineStart: 24, top: -12, transform: "rotate(-4deg)" }} />
          <dl className="spec">
            {d.about.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
            <div>
              <dt>{d.about.problemSolving}</dt>
              <dd>
                <ExternalLink href={profile.links.codeforces} newTab={d.nav.newTab} className="link">
                  <span dir="ltr">Codeforces: Recursive-Thinker</span>
                </ExternalLink>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="closing rv">
        <div>
          <p className="h3">{d.contact.heading}</p>
          <p>{d.contact.text}</p>
        </div>
        <div className="btn-row">
          <Link className="btn btn-red" href={`/${locale}/contact`}>
            {d.nav.contact} <Icon name="arrowUpRight" className="ico go" />
          </Link>
          <Link className="btn btn-line" href={`/${locale}/work`}>
            {d.nav.work}
          </Link>
        </div>
      </div>
    </Sheet>
  );
}
