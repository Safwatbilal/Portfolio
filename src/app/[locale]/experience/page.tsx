import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHead, ProjectLogo, Sheet } from "@/components/ui";
import { getDictionary } from "@/content";
import { projectBases } from "@/content/shared";
import { isLocale } from "@/i18n/config";

export async function generateMetadata(props: PageProps<"/[locale]/experience">): Promise<Metadata> {
  const { locale } = await props.params;
  if (!isLocale(locale)) return {};
  return {
    title: getDictionary(locale).experience.title,
    alternates: { canonical: `/${locale}/experience`, languages: { en: "/en/experience", ar: "/ar/experience" } },
  };
}

export default async function Experience(props: PageProps<"/[locale]/experience">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const d = getDictionary(locale);
  return (
    <Sheet tilt="c">
      <PageHead
        titleId="exp-title"
        crumbs={[{ label: d.nav.homeShort, href: `/${locale}` }, { label: d.nav.experience }]}
        title={d.experience.title}
        note={d.nav.pageNotes.experience}
      />
      <ol className="roles">
        {d.experience.items.map((e) => {
          const logo = e.caseStudy && projectBases.find((p) => p.slug === e.caseStudy)?.logo;
          return (
            <li key={`${e.company}-${e.period}`} className="role-row rv">
              <div className="role-when">
                <span className="mono">{e.period}</span>
              </div>
              <div>
                <div className="mini-logo">
                  {logo && <ProjectLogo src={logo} alt="" size={44} />}
                  <h2 className="h3">{e.role}</h2>
                </div>
                <p className="tl-org">
                  {e.company} <span className="mark">{e.place}</span>
                </p>
                <p className="sum">{e.summary}</p>
                {e.caseStudy && (
                  <div className="btn-row">
                    <Link className="btn btn-line" href={`/${locale}/work/${e.caseStudy}`}>
                      {d.experience.caseStudy}
                      <span className="sr-only">: {e.company}</span>
                    </Link>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </Sheet>
  );
}
