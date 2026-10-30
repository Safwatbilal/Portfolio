import { stackItems } from "@/content/shared";
import { Icon, type IconName } from "./icons";

const folders: { color: string; icon: IconName }[] = [
  { color: "var(--f-brown)", icon: "code" },
  { color: "var(--f-orange)", icon: "layers" },
  { color: "var(--f-pink)", icon: "database" },
  { color: "var(--f-navy)", icon: "file" },
  { color: "var(--f-green)", icon: "layout" },
  { color: "var(--f-blue)", icon: "box" },
  { color: "var(--f-cyan)", icon: "puzzle" },
  { color: "var(--f-dark)", icon: "smartphone" },
  { color: "var(--f-brown)", icon: "briefcase" },
];

/** Tool groups as little paper folders; hovering one opens it. */
export function StackFolders({ groups, limit }: { groups: string[]; limit?: number }) {
  return (
    <ul className="folders">
      {stackItems.slice(0, limit).map((items, i) => (
        <li key={groups[i]} className="folder-item rv" style={{ "--c": folders[i].color, "--dl": `${i * 60}ms` } as React.CSSProperties}>
          <span className="folder" aria-hidden="true">
            <span className="back" />
            <span className="peek" />
            <span className="front">
              <Icon name={folders[i].icon} className="ico" />
            </span>
          </span>
          <span className="folder-name">{groups[i]}</span>
          <span className="folder-tools" dir="ltr">
            {items.join(", ")}
          </span>
        </li>
      ))}
    </ul>
  );
}
