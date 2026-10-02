// "Composed S": module A (ink) + module B (accent) on a 32-unit grid.
// Geometry must match 02-brand/logo/*.svg. `animated` plays the assembly
// animation once on load (see .mark-* in globals.css); hovering a parent with
// the `group` class replays a small "click into place" nudge.
export function Mark({
  size = 28,
  className = "",
  animated = false,
}: {
  size?: number;
  className?: string;
  animated?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      className={`${animated ? "mark-animated" : ""} overflow-visible ${className}`}
    >
      <g strokeLinejoin="round" strokeWidth={1.2}>
        <path d="M2 2H30V8H8V13H22V19H2Z" className="mark-a fill-ink stroke-ink" />
        <path d="M24 13H30V30H2V24H24Z" className="mark-b fill-accent stroke-accent" />
      </g>
    </svg>
  );
}

export function Wordmark({ name, animated = false }: { name: string; animated?: boolean }) {
  return (
    <span className="group inline-flex items-center gap-2.5">
      <Mark size={26} animated={animated} />
      <span className="wordmark text-[1.0625rem] font-semibold text-ink">{name}</span>
    </span>
  );
}
