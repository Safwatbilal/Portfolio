import Link from "next/link";
import { Icon, type IconName } from "./icons";

const shapes: { cls: string; icon?: IconName }[] = [
  { cls: "st-1", icon: "layout" },
  { cls: "st-2" },
  { cls: "st-3" },
  { cls: "st-4", icon: "smartphone" },
  { cls: "st-5", icon: "database" },
  { cls: "st-6", icon: "puzzle" },
];

/** Skill stickers: frosted-glass tiles that float over soft colour blobs. */
export function Stickers({ labels, href }: { labels: string[]; href: string }) {
  return (
    <div className="stickers rv">
      <span className="st-glow" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      {shapes.slice(0, labels.length).map((s, i) => (
        <Link key={labels[i]} href={href} className={`sticker ${s.cls}`}>
          <span>
            {s.icon && <Icon name={s.icon} className="ico" />}
            <span>{labels[i]}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
