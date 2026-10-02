import { profile } from "@/content/profile";
import { Mark } from "./logo";
import { ExternalLink } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-6 py-10 text-sm text-ink-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Mark size={20} />
          <p>
            © {new Date().getFullYear()} {profile.name} · {profile.location} ·{" "}
            <span lang="ar" className="text-ink-3">
              {profile.nameAr}
            </span>
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          <li>
            <a href={`mailto:${profile.email}`} className="hover:text-ink">
              Email
            </a>
          </li>
          <li>
            <ExternalLink href={profile.links.linkedin} showIcon={false} className="hover:text-ink">
              LinkedIn
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href={profile.links.github} showIcon={false} className="hover:text-ink">
              GitHub
            </ExternalLink>
          </li>
          <li>Built with Next.js &amp; TypeScript</li>
        </ul>
      </div>
    </footer>
  );
}
