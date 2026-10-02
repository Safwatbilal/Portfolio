import type { Dictionary } from "@/content/types";
import { profile } from "@/content/shared";
import { Mark } from "./logo";
import { ExternalLink } from "./ui";

export function Footer({ d }: { d: Dictionary }) {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-6 py-10 text-sm text-ink-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="group flex items-center gap-3">
          <Mark size={20} />
          <p>
            © {new Date().getFullYear()} <span lang="en">{profile.name}</span> ·{" "}
            <span lang="ar">{profile.nameAr}</span>
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          <li>
            <a href={`mailto:${profile.email}`} className="hover:text-ink">
              {d.footer.email}
            </a>
          </li>
          <li>
            <ExternalLink href={profile.links.linkedin} newTab={d.nav.newTab} showIcon={false} className="hover:text-ink">
              LinkedIn
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href={profile.links.github} newTab={d.nav.newTab} showIcon={false} className="hover:text-ink">
              GitHub
            </ExternalLink>
          </li>
          <li>{d.footer.builtWith}</li>
        </ul>
      </div>
    </footer>
  );
}
