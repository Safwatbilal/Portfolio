// "Composed S": module A (ink) + module B (accent) on a 32-unit grid.
// Geometry must match 02-brand/logo/*.svg.
export function Mark({ size = 28, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <g strokeLinejoin="round" strokeWidth={1.2}>
        <path d="M2 2H30V8H8V13H22V19H2Z" className="fill-ink stroke-ink" />
        <path d="M24 13H30V30H2V24H24Z" className="fill-accent stroke-accent" />
      </g>
    </svg>
  );
}

export function Wordmark() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Mark size={26} />
      <span className="text-[1.0625rem] font-semibold tracking-[-0.02em] text-ink">
        Safwat Bilal
      </span>
    </span>
  );
}
