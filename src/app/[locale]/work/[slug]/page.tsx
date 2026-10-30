import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Icon } from "@/components/icons";
import { ProjectVisual, ScreenshotGallery } from "@/components/project-visual";
import { ExternalLink, LiveBadge, PageHead, ProjectLogo, Sheet, Tag, TextLink } from "@/components/ui";
import { getDictionary, getProjects } from "@/content";
import { profile, projectBases, siteUrl } from "@/content/shared";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { ogImage } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => projectBases.map((p) => ({ locale, slug: p.slug })));
}

function load(locale: string, slug: string) {
  if (!isLocale(locale)) return null;
  const project = getProjects(locale).find((p) => p.slug === slug);
  return project ? { d: getDictionary(locale), project, locale } : null;
}

export async function generateMetadata(props: PageProps<"/[locale]/work/[slug]">): Promise<Metadata> {
  const { locale, slug } = await props.params;
  const data = load(locale, slug);
  if (!data) return {};
  const { d, project: p } = data;
  const title = `${p.name}: ${d.caseStudy.titleSuffix}`;
  return {
    title,
    description: p.caseStudy.summary,
    alternates: {
      canonical: `/${locale}/work/${slug}`,
      languages: { en: `/en/work/${slug}`, ar: `/ar/work/${slug}` },
    },
    openGraph: {
      type: "article",
      title,
      description: p.caseStudy.summary,
      url: `/${locale}/work/${slug}`,
      images: [ogImage(locale as Locale, slug)],
    },
    twitter: { card: "summary_large_image", title, description: p.caseStudy.summary, images: [ogImage(locale as Locale, slug).url] },
  };
}

export default async function CaseStudy(props: PageProps<"/[locale]/work/[slug]">) {
  const { locale: rawLocale, slug } = await props.params;
  const data = load(rawLocale, slug);
  if (!data) notFound();
  const { d, project: p, locale } = data;

  const cs = p.caseStudy;
  const all = getProjects(locale);
  const next = all[(all.findIndex((x) => x.slug === p.slug) + 1) % all.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: p.name,
    description: cs.summary,
    inLanguage: locale,
    url: `${siteUrl}/${locale}/work/${p.slug}`,
    creator: { "@type": "Person", name: profile.name, url: siteUrl },
  };

  return (
    <Sheet tilt={(["b", "c", undefined] as const)[all.findIndex((x) => x.slug === p.slug) % 3]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHead
        titleId="cs-title"
        crumbs={[
          { label: d.nav.homeShort, href: `/${locale}` },
          { label: d.nav.work, href: `/${locale}/work` },
          { label: p.name },
        ]}
        title={p.name}
        lead={cs.summary}
        note={d.nav.pageNotes.work}
      />
      <div className="head-top" style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 18 }}>
        <ProjectLogo src={p.logo} alt={`${p.name} ${d.work.logoAlt}`} size={48} />
        <span className="mono-index">{p.index}</span>
        <LiveBadge label={d.work.live} />
      </div>
      <ul className="chips" style={{ marginTop: 16 }} aria-label={d.work.technologies}>
        {p.tags.map((t) => (
          <li key={t}>
            <Tag>{t}</Tag>
          </li>
        ))}
      </ul>

      <figure className="case-hero rv">
        <span className="tape" aria-hidden="true" />
        <span className="tape yellow" aria-hidden="true" />
        <ProjectVisual project={p} labels={{ schematic: d.work.schematic, screenshot: d.work.screenshot }} priority />
      </figure>

      <div className="case-body">
        <div>
          <Block title={d.caseStudy.product}>
            <p>{cs.product}</p>
          </Block>

          {cs.problem && (
            <Block title={d.caseStudy.problem}>
              <p>{cs.problem}</p>
            </Block>
          )}

          {cs.structure && (
            <Block title={`${d.caseStudy.structure}: ${cs.structure.title}`}>
              <ol className="steps">
                {cs.structure.items.map((s, n) => (
                  <li key={s.name}>
                    <p>
                      <span className="n">{n + 1}</span>
                      <b style={{ color: "var(--ink)" }}>{s.name}</b>
                    </p>
                    <p>{s.detail}</p>
                  </li>
                ))}
              </ol>
            </Block>
          )}

          <Block title={cs.builtHeading ?? d.caseStudy.built}>
            <ul className="built">
              {cs.built.map((b) => (
                <li key={b.title}>
                  <b>{b.title}</b>
                  <span>{b.text}</span>
                </li>
              ))}
            </ul>
          </Block>

          {cs.notes.length > 0 && (
            <Block title={d.caseStudy.notes}>
              <ul className="notes">
                {cs.notes.map((n) => (
                  <li key={n.slice(0, 24)}>
                    <Icon name="check" className="ico" />
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </Block>
          )}

          {p.screenshots.length > 1 && (
            <Block title={d.caseStudy.screenshots} wide>
              <ScreenshotGallery project={p} />
            </Block>
          )}

          <Block title={d.caseStudy.outcome}>
            <p>{cs.outcome}</p>
          </Block>
        </div>

        <aside className="case-aside">
          <div className="card rv">
            <dl className="spec">
              {cs.meta.map((m) => (
                <div key={m.label}>
                  <dt>{m.label}</dt>
                  <dd>{m.value}</dd>
                </div>
              ))}
              <div>
                <dt>{d.caseStudy.links}</dt>
                <dd>
                  <ul style={{ listStyle: "none", display: "grid", gap: 4 }}>
                    {cs.links.map((l) => (
                      <li key={l.href}>
                        <ExternalLink href={l.href} newTab={d.nav.newTab} className="link">
                          {l.label}
                        </ExternalLink>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>

      <nav aria-label={d.caseStudy.next} className="pager">
        <div>
          <p className="mono">{d.caseStudy.next}</p>
          <TextLink href={`/${locale}/work/${next.slug}`}>
            <b>{next.name}</b>
          </TextLink>
        </div>
        <a href={`mailto:${profile.email}`} className="link">
          {d.caseStudy.email}
        </a>
      </nav>
    </Sheet>
  );
}

function Block({ title, children, wide }: { title: string; children: ReactNode; wide?: boolean }) {
  return (
    <section className="case-sec rv">
      <h2 className="h2">
        <span className="hl hl-draw">{title}</span>
      </h2>
      <div className="body" style={wide ? { maxWidth: "none" } : undefined}>
        {children}
      </div>
    </section>
  );
}
