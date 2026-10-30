import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { PaperClip } from "./ui";

/**
 * The mustard portrait card. Drop a photo at public/portrait-yellow.jpg (4:5 works best)
 * and it shows up here; until then the card shows the initials.
 */
export function Portrait({ name, initials }: { name: string; initials: string }) {
  const hasPhoto = existsSync(join(process.cwd(), "public", "portrait-yellow.jpg"));
  return (
    <div className="tilt3d" data-tilt3d="10" data-tilt3d-phone="">
      <figure className="portrait rv">
        <PaperClip className="pclip" />
        <span className="tape yellow" aria-hidden="true" />
        {hasPhoto ? (
          <Image src="/portrait-yellow.jpg" alt={name} width={809} height={1080} priority sizes="290px" />
        ) : (
          <div className="mono-card" aria-hidden="true">
            <b>{initials}</b>
          </div>
        )}
        <span className="glare" aria-hidden="true" />
      </figure>
    </div>
  );
}
