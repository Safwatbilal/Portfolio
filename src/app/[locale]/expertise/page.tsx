import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StackFolders } from "@/components/stack-folders";
import { PageHead, Sheet } from "@/components/ui";
import { getDictionary } from "@/content";
import { isLocale } from "@/i18n/config";

const colors = ["var(--st-orange)", "var(--st-red)", "var(--st-pink)", "var(--st-green)", "var(--st-blue)", "var(--hl)"];

export async function generateMetadata(props: PageProps<"/[locale]/expertise">): Promise<Metadata> {
  const { locale } = await props.params;
  if (!isLocale(locale)) return {};
  return {
    title: getDictionary(locale).nav.expertise,
    alternates: { canonical: `/${locale}/expertise`, languages: { en: "/en/expertise", ar: "/ar/expertise" } },
  };
}

export default async function Expertise(props: PageProps<"/[locale]/expertise">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const d = getDictionary(locale);
  const c = d.capabilities;
  return (
    <Sheet tilt="b">
      <PageHead
        titleId="ex-title"
        crumbs={[{ label: d.nav.homeShort, href: `/${locale}` }, { label: d.nav.expertise }]}
        title={c.title}
        lead={c.intro}
        note={d.nav.pageNotes.expertise}
      />
      <div className="areas">
        {c.items.map((it, i) => (
          <article
            key={it.title}
            className="area rv"
            style={{ "--c": colors[i % colors.length], "--dl": `${i * 80}ms` } as React.CSSProperties}
          >
            <span className="tab">
              <span>{c.stickers[i] ?? it.title}</span>
            </span>
            <div className="card">
              <h2 className="h3">{it.title}</h2>
              <p style={{ marginTop: 8 }}>{it.text}</p>
              <p className="seen">
                <span>{c.usedIn}</span>
                {it.where.map((w) => (
                  <b key={w}>{w}</b>
                ))}
              </p>
            </div>
          </article>
        ))}
      </div>
      <section className="sec tools-wall" aria-labelledby="tools">
        <h2 className="h2" id="tools" style={{ marginBottom: 30 }}>
          <span className="hl hl-draw">{c.toolsTitle}</span>
        </h2>
        <StackFolders groups={c.stackGroups} />
      </section>
    </Sheet>
  );
}
