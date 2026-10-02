import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icons";
import { ProjectVisual } from "@/components/project-visual";
import { ExternalLink, StatusBadge, TextLink } from "@/components/ui";
import { profile, siteUrl } from "@/content/profile";
import { getProject, projects } from "@/content/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const p = getProject(slug);
  if (!p) return {};
  const title = `${p.name}: case study`;
  return {
    title,
    description: p.caseStudy.summary,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: { type: "article", title, description: p.caseStudy.summary, url: `/work/${p.slug}` },
  };
}

export default async function CaseStudy(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const p = getProject(slug);
  if (!p) notFound();

  const cs = p.caseStudy;
  const i = projects.indexOf(p);
  const next = projects[(i + 1) % projects.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: p.name,
    description: cs.summary,
    url: `${siteUrl}/work/${p.slug}`,
    creator: { "@type": "Person", name: profile.name, url: siteUrl },
  };

  return (
    <article aria-labelledby="cs-title">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="container-page pb-10 pt-10 md:pb-14 md:pt-16">
        <Link
          href="/#work"
          className="group mb-10 inline-flex items-center gap-1.5 text-sm font-medium text-ink-2 hover:text-ink"
        >
          <Icon
            name="arrowLeft"
            size={16}
            className="transition-transform duration-150 ease-brand group-hover:-translate-x-1"
          />
          All work
        </Link>
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-sm text-ink-3">{p.index}</span>
          <StatusBadge status={p.status} />
        </div>
        <h1 id="cs-title" className="display">
          {p.name}
        </h1>
        <p className="lead mt-5 max-w-[60ch]">{cs.summary}</p>
      </header>

      <div className="container-page">
        <ProjectVisual project={p} />
      </div>

      <div className="container-page grid gap-12 py-14 md:grid-cols-12 md:py-20">
        {/* Meta: sticky side column on desktop */}
        <aside className="md:col-span-3">
          <dl className="grid gap-5 sm:grid-cols-2 md:sticky md:top-24 md:grid-cols-1">
            {cs.meta.map((m) => (
              <div key={m.label}>
                <dt className="label mb-1">{m.label}</dt>
                <dd className="text-[0.9375rem] text-ink">{m.value}</dd>
              </div>
            ))}
            <div>
              <dt className="label mb-1">Links</dt>
              <dd>
                <ul className="space-y-1">
                  {cs.links.map((l) => (
                    <li key={l.href}>
                      <ExternalLink href={l.href} className="link inline-flex items-center gap-1 text-[0.9375rem]">
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
          <Block title="The product">
            <p>{cs.product}</p>
          </Block>

          {cs.problem && (
            <Block title="The problem">
              <p>{cs.problem}</p>
            </Block>
          )}

          {cs.structure && (
            <Block title={`How it's put together: ${cs.structure.title.toLowerCase()}`}>
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

          <Block title={cs.builtHeading ?? "What I built"}>
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
            <Block title="Engineering notes">
              <ul className="space-y-3">
                {cs.notes.map((n) => (
                  <li key={n.slice(0, 24)} className="flex gap-3">
                    <span className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </Block>
          )}

          <Block title="Outcome">
            <p>{cs.outcome}</p>
          </Block>
        </div>
      </div>

      <nav aria-label="More work" className="border-t border-line">
        <div className="container-page flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="label mb-1">Next project</p>
            <TextLink href={`/work/${next.slug}`}>{next.name}</TextLink>
          </div>
          <a href={`mailto:${profile.email}`} className="link text-[0.9375rem]">
            Email Safwat
          </a>
        </div>
      </nav>
    </article>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="h3 mb-4">{title}</h2>
      <div className="max-w-[68ch] text-[1.0625rem] leading-relaxed text-ink-2">{children}</div>
    </section>
  );
}
