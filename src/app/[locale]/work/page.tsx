import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ExternalLink, PageHead, Sheet } from "@/components/ui";
import { WorkCard } from "@/components/work-card";
import { getDictionary, getProjects } from "@/content";
import { alsoBuiltBase } from "@/content/shared";
import { isLocale } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(props: PageProps<"/[locale]/work">): Promise<Metadata> {
  const { locale } = await props.params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale, "work");
}

export default async function Work(props: PageProps<"/[locale]/work">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const d = getDictionary(locale);
  const projects = getProjects(locale);
  return (
    <Sheet>
      <PageHead
        titleId="work-title"
        crumbs={[{ label: d.nav.homeShort, href: `/${locale}` }, { label: d.nav.work }]}
        title={d.work.title}
        lead={d.work.intro}
        note={d.nav.pageNotes.work}
      />
      <ul className="works" style={{ marginTop: "clamp(40px,5vw,60px)" }}>
        {projects.map((p) => (
          <li key={p.slug} className="rv">
            <WorkCard p={p} d={d} locale={locale} />
          </li>
        ))}
      </ul>
      <div className="also rv">
        <div>
          <p className="mono sec-eyebrow">{d.work.alsoBuilt}</p>
          <p>
            <b style={{ color: "var(--ink)" }}>{alsoBuiltBase.name}</b>
            {locale === "ar" ? "، " : ", "}
            {d.work.alsoBuiltText}
          </p>
          <ExternalLink href={alsoBuiltBase.href} newTab={d.nav.newTab} className="link">
            <span dir="ltr">{alsoBuiltBase.linkLabel}</span>
          </ExternalLink>
        </div>
        <figure className="print">
          <span className="tape yellow" aria-hidden="true" />
          <Image src={alsoBuiltBase.image} alt={d.work.alsoBuiltAlt} width={1920} height={968} sizes="(min-width: 960px) 55vw, 100vw" />
        </figure>
      </div>
    </Sheet>
  );
}
