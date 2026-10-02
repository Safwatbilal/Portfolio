import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Icon } from "@/components/icons";
import { ProjectVisual, ScreenshotGallery } from "@/components/project-visual";
import { ExternalLink, LiveBadge, ProjectLogo, Tag, TextLink } from "@/components/ui";
import { getDictionary, getProjects } from "@/content";
import { profile, projectBases, siteUrl } from "@/content/shared";
import { isLocale, locales } from "@/i18n/config";

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
    openGraph: { type: "article", title, description: p.caseStudy.summary, url: `/${locale}/work/${slug}` },
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
    <article aria-labelledby="cs-title">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="container-page pb-10 pt-10 md:pb-14 md:pt-16">
        <Link
          href={`/${locale}#work`}
          className="group mb-10 inline-flex items-center gap-1.5 text-sm font-medium text-ink-2 hover:text-ink"
        >
          <Icon
            name="arrowLeft"
            size={16}
            className="transition-transform duration-150 ease-brand group-hover:-translate-x-1 rtl:-scale-x-100 rtl:group-hover:translate-x-1"
          />
          {d.caseStudy.allWork}
        </Link>
        <div className="mb-5 flex items-center gap-3">
          <ProjectLogo src={p.logo} alt={`${p.name} ${d.work.logoAlt}`} size={52} />
          <span className="font-mono text-sm text-ink-3">{p.index}</span>
          <LiveBadge label={d.work.live} />
        </div>
        <h1 id="cs-title" className="display">
          {p.name}
        </h1>
        <p className="lead mt-5 max-w-[60ch]">{cs.summary}</p>
        <ul className="mt-6 flex flex-wrap gap-1.5" aria-label={d.work.technologies}>
          {p.tags.map((t) => (
            <li key={t}>
              <Tag>{t}</Tag>
            </li>
          ))}
        </ul>
      </header>

      <div className="container-page">
        <ProjectVisual project={p} labels={{ schematic: d.work.schematic, screenshot: d.work.screenshot }} priority />
      </div>

      <div className="container-page grid gap-12 py-14 md:grid-cols-12 md:py-20">
        <aside className="md:col-span-3">
          <dl className="grid gap-5 sm:grid-cols-2 md:sticky md:top-24 md:grid-cols-1">
            {cs.meta.map((m) => (
              <div key={m.label}>
                <dt className="label mb-1">{m.label}</dt>
                <dd className="text-[0.9375rem] text-ink">{m.value}</dd>
              </div>
            ))}
            <div>
              <dt className="label mb-1">{d.caseStudy.links}</dt>
              <dd>
                <ul className="space-y-1">
                  {cs.links.map((l) => (
                    <li key={l.href}>
                      <ExternalLink href={l.href} newTab={d.nav.newTab} className="link inline-flex items-center gap-1 text-[0.9375rem]">
                        {l.label}
                      </ExternalLink>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </aside>

        <div className="space-y-14 md:col-span-8 md:col-start-5">
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
              <ol className="grid gap-3">
                {cs.structure.items.map((s, n) => (
                  <li key={s.name} className="rounded-2xl border border-line bg-surface p-5">
                    <p className="mb-1 flex items-baseline gap-3">
                      <span className="font-mono text-sm text-accent-ink">{n + 1}</span>
                      <span className="font-semibold text-ink">{s.name}</span>
                    </p>
                    <p className="text-ink-2">{s.detail}</p>
                  </li>
                ))}
              </ol>
            </Block>
          )}

          <Block title={cs.builtHeading ?? d.caseStudy.built}>
            <ul className="divide-y divide-line border-y border-line">
              {cs.built.map((b) => (
                <li key={b.title} className="grid gap-1 py-4 sm:grid-cols-[13rem_1fr] sm:gap-6">
                  <p className="font-semibold text-ink">{b.title}</p>
                  <p className="text-ink-2">{b.text}</p>
                </li>
              ))}
            </ul>
          </Block>

          {cs.notes.length > 0 && (
            <Block title={d.caseStudy.notes}>
              <ul className="space-y-3">
                {cs.notes.map((n) => (
                  <li key={n.slice(0, 24)} className="flex gap-3">
                    <span className="mt-[0.8em] h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
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
      </div>

      <nav aria-label={d.caseStudy.next} className="border-t border-line">
        <div className="container-page flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="label mb-1">{d.caseStudy.next}</p>
            <TextLink href={`/${locale}/work/${next.slug}`}>{next.name}</TextLink>
          </div>
          <a href={`mailto:${profile.email}`} className="link text-[0.9375rem]">
            {d.caseStudy.email}
          </a>
        </div>
      </nav>
    </article>
  );
}

function Block({ title, children, wide }: { title: string; children: ReactNode; wide?: boolean }) {
  return (
    <section>
      <h2 className="h3 mb-4">{title}</h2>
      <div className={`${wide ? "" : "max-w-[68ch]"} text-[1.0625rem] leading-relaxed text-ink-2`}>{children}</div>
    </section>
  );
}
