import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CopyEmail } from "@/components/copy-email";
import { Icon } from "@/components/icons";
import { ExternalLink, PageHead, Sheet } from "@/components/ui";
import { getDictionary } from "@/content";
import { profile } from "@/content/shared";
import { isLocale } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(props: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const { locale } = await props.params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale, "contact");
}

export default async function Contact(props: PageProps<"/[locale]/contact">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const d = getDictionary(locale);
  return (
    <Sheet tilt="b">
      <PageHead
        titleId="contact-title"
        crumbs={[{ label: d.nav.homeShort, href: `/${locale}` }, { label: d.nav.contact }]}
        title={d.contact.heading}
        lead={d.contact.text}
        note={d.nav.pageNotes.contact}
      />
      <div className="contact-grid">
        <div className="closing rv" style={{ gridTemplateColumns: "minmax(0,1fr)", marginTop: 0 }}>
          <div>
            <p className="mono sec-eyebrow">{d.contact.eyebrow}</p>
            <a href={`mailto:${profile.email}`} dir="ltr" className="mail">
              {profile.email}
            </a>
            <div className="btn-row" style={{ marginTop: 24 }}>
              <a className="btn btn-red" href={`mailto:${profile.email}`}>
                {d.footer.email} <Icon name="arrowUpRight" className="ico go" />
              </a>
              <CopyEmail email={profile.email} label={d.contact.copy} done={d.contact.copied} />
            </div>
          </div>
        </div>
        <div className="card rv" style={{ ["--dl" as string]: "100ms" }}>
          <ul className="direct-list">
            <li>
              <span className="dot">
                <Icon name="linkedin" className="ico" />
              </span>
              <b>
                <ExternalLink href={profile.links.linkedin} newTab={d.nav.newTab} className="link">
                  LinkedIn
                </ExternalLink>
              </b>
            </li>
            <li>
              <span className="dot">
                <Icon name="github" className="ico" />
              </span>
              <b>
                <ExternalLink href={profile.links.github} newTab={d.nav.newTab} className="link">
                  GitHub
                </ExternalLink>
              </b>
            </li>
            <li>
              <span className="dot">
                <Icon name="instagram" className="ico" />
              </span>
              <b>
                <ExternalLink href={profile.links.instagram} newTab={d.nav.newTab} className="link">
                  Instagram
                </ExternalLink>
              </b>
            </li>
            <li>
              <span className="dot">
                <Icon name="download" className="ico" />
              </span>
              <b>
                <a href={profile.cvPath} download className="link">
                  {d.nav.cv} <span className="sr-only">{d.nav.cvNote}</span>
                </a>
              </b>
            </li>
            <li>
              <span className="dot">
                <Icon name="mapPin" className="ico" />
              </span>
              <b>{d.about.facts[0]?.value}</b>
            </li>
          </ul>
        </div>
      </div>
    </Sheet>
  );
}
