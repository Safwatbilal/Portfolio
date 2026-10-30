import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icons";
import { Portrait } from "@/components/portrait";
import { StackFolders } from "@/components/stack-folders";
import { Stickers } from "@/components/stickers";
import { Timeline } from "@/components/timeline";
import { ExternalLink, Sheet, TextLink } from "@/components/ui";
import { WorkCard } from "@/components/work-card";
import { getDictionary, getProjects } from "@/content";
import { profile, siteUrl } from "@/content/shared";
import { isLocale } from "@/i18n/config";

export default async function Home(props: PageProps<"/[locale]">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const d = getDictionary(locale);
  const projects = getProjects(locale);
  const base = `/${locale}`;
  const name = profile.name;

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.nameAr,
    jobTitle: "Software Engineer (Mid-Level Frontend · Junior Backend)",
    url: `${siteUrl}/${locale}`,
    email: `mailto:${profile.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Aleppo", addressCountry: "SY" },
    worksFor: { "@type": "Organization", name: "Kadnya", url: "https://kadnya.com" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "University of Aleppo" },
    hasCredential: { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "B.Sc. Information Engineering (Software Engineering), 2026" },
    knowsLanguage: ["ar", "en"],
    knowsAbout: ["Software engineering", "React", "Next.js", "TypeScript", "Frontend development", "Node.js", "NestJS", "Backend development", "Micro-frontends", "Payment gateway integration", "Zoom integration", "Third-party SDKs"],
    sameAs: Object.values(profile.links),
  };

  return (
    <Sheet page="home">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />

      {/* Identity block: portrait card, name + facts + contacts, margin note */}
      <div className="id-grid">
        <Portrait name={name} initials="SB" />

        <div className="id-main hero-in">
          <h1 id="hero-title" tabIndex={-1}>
            {name}
          </h1>
          <p className="id-tag">{d.hero.lead}</p>
          <dl className="facts">
            {d.hero.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
          <div className="reach">
            <ul className="contacts">
              <li>
                <a href={`mailto:${profile.email}`}>
                  <span className="dot">
                    <Icon name="mail" className="ico" />
                  </span>
                  <span dir="ltr">{profile.email}</span>
                </a>
              </li>
              <li>
                <ExternalLink href={profile.links.linkedin} newTab={d.nav.newTab} showIcon={false}>
                  <span className="dot">
                    <Icon name="linkedin" className="ico" />
                  </span>
                  <span dir="ltr">LinkedIn</span>
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href={profile.links.github} newTab={d.nav.newTab} showIcon={false}>
                  <span className="dot">
                    <Icon name="github" className="ico" />
                  </span>
                  <span dir="ltr">GitHub</span>
                </ExternalLink>
              </li>
            </ul>
            <a className="qr" href={profile.cvPath} download aria-label={`${d.nav.cv} ${d.nav.cvNote}`}>
              <Icon name="file" className="ico" />
              <span className="qr-label" aria-hidden="true">
                {d.hero.cvLabel}
              </span>
            </a>
          </div>
        </div>

        <aside className="id-side">
          <p className="note">{d.hero.note}</p>
          <svg className="doodle draw" viewBox="0 0 96 50" aria-hidden="true">
            <path pathLength="100" d="M4 30C14 10 34 6 40 18c5 10-8 18-12 10-5-9 14-18 30-14 12 3 22 10 32 18" />
            <path pathLength="100" d="M80 22l11 10-14 3" />
          </svg>
          <ul className="hand-links">
            <li>
              <a href={`mailto:${profile.email}`}>
                <Icon name="mail" className="ico" />
                <span className="boxed">{d.hero.sayHello}</span>
              </a>
            </li>
            <li>
              <ExternalLink href={profile.links.github} newTab={d.nav.newTab} showIcon={false}>
                <Icon name="at" className="ico" />
                Safwatbilal
              </ExternalLink>
            </li>
            <li>
              <Link href={`${base}/contact`}>
                <Icon name="briefcase" className="ico" />
                {d.hero.openFor}
              </Link>
            </li>
          </ul>
        </aside>
      </div>

      {/* Resume columns */}
      <div className="resume-cols">
        <div>
          <section className="col-block" aria-labelledby="h-exp">
            <h2 className="h2" id="h-exp">
              <span className="hl hl-draw">{d.experience.title}</span>
            </h2>
            <Timeline items={d.experience.items} d={d} locale={locale} />
            <TextLink href={`${base}/experience`}>{d.nav.experience}</TextLink>
          </section>
        </div>
        <div>
          <section className="col-block" aria-labelledby="h-good">
            <h2 className="h2" id="h-good">
              <span className="hl hl-draw">{d.capabilities.title}</span>
            </h2>
            <Stickers labels={d.capabilities.stickers} href={`${base}/expertise`} />
          </section>
          <section className="col-block" aria-labelledby="h-tools">
            <h2 className="h2" id="h-tools">
              <span className="hl hl-draw">{d.capabilities.toolsTitle}</span>
            </h2>
            <StackFolders groups={d.capabilities.stackGroups} limit={6} />
            <p style={{ marginTop: 26 }}>
              <TextLink href={`${base}/expertise`}>{d.nav.expertise}</TextLink>
            </p>
          </section>
        </div>
      </div>

      {/* Work */}
      <section className="sec" aria-labelledby="work">
        <div className="sec-head">
          <p className="mono sec-eyebrow">{d.work.eyebrow}</p>
          <h2 className="h2" id="work">
            <span className="hl hl-draw">{d.work.title}</span>
          </h2>
          <p>{d.work.intro}</p>
        </div>
        <ul className="works">
          {projects.map((p) => (
            <li key={p.slug} className="rv">
              <WorkCard p={p} d={d} locale={locale} />
            </li>
          ))}
        </ul>
        <p style={{ marginTop: 34 }}>
          <TextLink href={`${base}/work`}>{d.nav.work}</TextLink>
        </p>
      </section>

      {/* Closing note */}
      <div className="closing rv">
        <div>
          <p className="h3">{d.contact.heading}</p>
          <p>{d.contact.text}</p>
        </div>
        <div className="btn-row">
          <Link className="btn btn-red" href={`${base}/contact`}>
            {d.nav.contact} <Icon name="arrowUpRight" className="ico go" />
          </Link>
          <Link className="btn btn-line" href={`${base}/about`}>
            {d.nav.about}
          </Link>
        </div>
      </div>
    </Sheet>
  );
}
