import Image from "next/image";
import Link from "next/link";
import { CopyEmail } from "@/components/copy-email";
import { Icon } from "@/components/icons";
import { ProjectVisual } from "@/components/project-visual";
import { ExternalLink, SectionHeader, StatusBadge, Tag, TextLink, buttonStyles } from "@/components/ui";
import { experience } from "@/content/experience";
import { about, capabilities, contact, hero, profile, siteUrl, stack } from "@/content/profile";
import { alsoBuilt, projects } from "@/content/projects";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.nameAr,
  jobTitle: profile.title,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Aleppo", addressCountry: "SY" },
  worksFor: { "@type": "Organization", name: "Kadnya", url: "https://kadnya.com" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Aleppo" },
  knowsLanguage: ["ar", "en"],
  knowsAbout: ["React", "Next.js", "TypeScript", "Frontend development", "Internationalization", "RTL interfaces"],
  sameAs: Object.values(profile.links),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      {/* Hero */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden">
        <div className="dot-grid pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
        <div className="container-page pb-16 pt-14 sm:pt-20 md:pb-24 md:pt-28">
          <p className="label rise mb-5 text-accent-ink">{hero.label}</p>
          <h1 id="hero-title" className="display rise max-w-[15ch] [animation-delay:60ms]">
            {hero.heading}
          </h1>
          <p className="lead rise mt-6 max-w-[62ch] [animation-delay:120ms]">{hero.lead}</p>
          <div className="rise mt-8 flex flex-col gap-3 sm:flex-row [animation-delay:180ms]">
            <Link href="#work" className={buttonStyles.primary}>
              See selected work
              <Icon name="arrowRight" size={18} />
            </Link>
            <a href={profile.cvPath} download className={buttonStyles.secondary}>
              <Icon name="download" size={18} />
              Download CV <span className="sr-only">(PDF)</span>
            </a>
          </div>

          <dl className="rise mt-14 grid gap-6 border-t border-line pt-8 sm:grid-cols-3 sm:gap-8 [animation-delay:240ms]">
            {hero.proof.map((item) => (
              <div key={item.label}>
                <dt className="label mb-1.5">{item.label}</dt>
                <dd className="text-[0.9375rem] leading-snug text-ink">{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Selected work */}
      <section aria-labelledby="work" className="border-t border-line py-16 md:py-28">
        <div className="container-page">
          <SectionHeader
            id="work"
            eyebrow="Work"
            title="Selected work"
            intro="Four products, each with a different kind of complexity."
          />

          <ol className="space-y-16 md:space-y-24">
            {projects.map((p) => (
              <li key={p.slug}>
                <article
                  aria-labelledby={`p-${p.slug}`}
                  className="grid gap-8 md:grid-cols-12 md:items-center md:gap-10"
                >
                  <div className="md:col-span-5">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="font-mono text-sm text-ink-3">{p.index}</span>
                      <StatusBadge status={p.status} />
                    </div>
                    <h3 id={`p-${p.slug}`} className="h2">
                      <Link href={`/work/${p.slug}`} className="hover:text-accent-ink">
                        {p.name}
                      </Link>
                    </h3>
                    <p className="mt-3 text-[1.0625rem] text-ink-2">{p.oneLiner}</p>
                    <p className="mt-4 text-[0.9375rem] text-ink">
                      <span className="font-semibold">My part: </span>
                      {p.myPart}
                    </p>
                    <p className="mt-4 text-sm text-ink-3">
                      {p.role} · {p.period} · {p.place}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
                      {p.tags.map((t) => (
                        <li key={t}>
                          <Tag>{t}</Tag>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                      <TextLink href={`/work/${p.slug}`}>
                        Read case study<span className="sr-only">: {p.name}</span>
                      </TextLink>
                      <ExternalLink
                        href={p.primaryLink.href}
                        className="inline-flex items-center gap-1 text-[0.9375rem] text-ink-2 hover:text-ink"
                      >
                        {p.primaryLink.label}
                      </ExternalLink>
                    </div>
                  </div>
                  <div className="md:col-span-7">
                    <ProjectVisual project={p} />
                  </div>
                </article>
              </li>
            ))}
          </ol>

          <div className="mt-20 grid gap-6 rounded-2xl border border-line bg-surface p-5 sm:p-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <p className="label mb-2">Also built</p>
              <p className="text-ink-2">
                <span className="font-semibold text-ink">{alsoBuilt.name}</span>, {alsoBuilt.text}
              </p>
              <ExternalLink
                href={alsoBuilt.href}
                className="link mt-3 inline-flex items-center gap-1 text-[0.9375rem]"
              >
                {alsoBuilt.linkLabel}
              </ExternalLink>
            </div>
            <div className="md:col-span-7">
              <Image
                src={alsoBuilt.image}
                alt={alsoBuilt.imageAlt}
                width={1920}
                height={968}
                sizes="(min-width: 768px) 60vw, 100vw"
                className="h-auto w-full rounded-xl border border-line"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section aria-labelledby="experience" className="border-t border-line py-16 md:py-28">
        <div className="container-page">
          <SectionHeader id="experience" eyebrow="Career" title="Experience" />
          <ol className="divide-y divide-line border-y border-line">
            {experience.map((e) => (
              <li
                key={`${e.company}-${e.period}`}
                className="grid gap-1 py-6 sm:grid-cols-[10rem_1fr] sm:gap-6 md:grid-cols-[12rem_1fr]"
              >
                <p className="font-mono text-sm text-ink-3">{e.period}</p>
                <div>
                  <h3 className="h3">
                    {e.role} <span className="text-ink-3">·</span> {e.company}
                  </h3>
                  <p className="text-sm text-ink-3">{e.place}</p>
                  <p className="mt-2 max-w-[68ch] text-ink-2">{e.summary}</p>
                  {e.caseStudy && (
                    <Link
                      href={`/work/${e.caseStudy}`}
                      className="link mt-2 inline-block text-[0.9375rem]"
                    >
                      Case study<span className="sr-only">: {e.company}</span>
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Capabilities */}
      <section aria-labelledby="capabilities" className="border-t border-line py-16 md:py-28">
        <div className="container-page">
          <SectionHeader
            id="capabilities"
            eyebrow="Capabilities"
            title="What I work on"
            intro="Grouped by where I've actually used it."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((c) => (
              <div key={c.title} className="rounded-2xl border border-line bg-surface p-6">
                <h3 className="h3">{c.title}</h3>
                <p className="mt-2 text-ink-2">{c.text}</p>
                <p className="mt-4 text-sm text-ink-3">
                  <span className="sr-only">Used in: </span>
                  {c.where.join(" · ")}
                </p>
              </div>
            ))}
          </div>
          <dl className="mt-10 grid gap-x-10 gap-y-4 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-3">
            {stack.map((s) => (
              <div key={s.group}>
                <dt className="label mb-1">{s.group}</dt>
                <dd className="text-[0.9375rem] text-ink">{s.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* About */}
      <section aria-labelledby="about" className="border-t border-line py-16 md:py-28">
        <div className="container-page grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionHeader id="about" eyebrow="About" title="Background" />
            <div className="-mt-4 space-y-4 text-[1.0625rem] text-ink-2 md:-mt-8">
              {about.paragraphs.map((t) => (
                <p key={t.slice(0, 24)} className="max-w-[68ch]">
                  {t}
                </p>
              ))}
            </div>
          </div>
          <dl className="space-y-5 self-end md:col-span-4 md:col-start-9">
            {about.facts.map((f) => (
              <div key={f.label}>
                <dt className="label mb-1">{f.label}</dt>
                <dd className="text-[0.9375rem] text-ink">{f.value}</dd>
              </div>
            ))}
            <div>
              <dt className="label mb-1">Problem solving</dt>
              <dd className="text-[0.9375rem]">
                <ExternalLink
                  href={profile.links.codeforces}
                  className="link inline-flex items-center gap-1"
                >
                  Codeforces: Recursive-Thinker
                </ExternalLink>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Contact */}
      <section aria-labelledby="contact" className="border-t border-line py-16 md:py-28">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="label mb-3">Contact</p>
            <h2 id="contact" className="h2">
              {contact.heading}
            </h2>
            <p className="lead mt-3">{contact.text}</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-block break-all text-[clamp(1.25rem,3.5vw,2rem)] font-semibold tracking-[-0.02em] text-accent-ink underline decoration-1 underline-offset-[6px] hover:decoration-2"
            >
              {profile.email}
            </a>
            <div className="mt-6 flex flex-wrap gap-3">
              <CopyEmail email={profile.email} />
              <ExternalLink href={profile.links.linkedin} className={buttonStyles.secondary}>
                <Icon name="linkedin" size={18} />
                LinkedIn
              </ExternalLink>
              <ExternalLink href={profile.links.github} className={buttonStyles.secondary}>
                <Icon name="github" size={18} />
                GitHub
              </ExternalLink>
              <a href={profile.cvPath} download className={buttonStyles.secondary}>
                <Icon name="download" size={18} />
                CV <span className="sr-only">(PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
