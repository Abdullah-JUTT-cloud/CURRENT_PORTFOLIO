/**
 * SectionDivider — crisp sine-wave transition between two differently-colored sections.
 *
 * Renders TWO solid-filled SVG shapes that meet at a clean sine curve:
 *   • Top shape  — filled with `aboveColor` (the section ABOVE)
 *   • Bottom shape — filled with `belowColor` (the section BELOW)
 *
 * No gradients, no blur, no opacity, no drop-shadow — just two solid colors
 * with a sharp, smooth boundary between them.
 */
export default function SectionDivider({ aboveColor = "#ff2a2a", belowColor = "#05050a" }) {
  const h = 100;          // total SVG height in px
  const mid = h / 2;      // centre-line y (where the curve oscillates around)
  const amp = 25;          // amplitude — how far the curve dips/rises from centre
  const w = 1440;          // viewBox width (maps to 100 % of container)

  // ── Sine curve (one full period, two cubic-bézier segments) ──────────
  //   Starts at (0, mid), rises to a peak at ~x=360, returns to mid at x=720,
  //   dips to a trough at ~x=1080, returns to mid at x=1440.
  const curve = `M0,${mid} C${w * 0.25},${mid - amp} ${w * 0.25},${mid + amp} ${w / 2},${mid} C${w * 0.75},${mid - amp} ${w * 0.75},${mid + amp} ${w},${mid}`;

  // ── Top shape (aboveColor) ───────────────────────────────────────────
  //   Rectangle from y=0 across the top, then follows the curve BACKWARDS
  //   to close the path — everything above the curve is solid aboveColor.
  const topPath =
    `M0,0 L${w},0 L${w},${mid}` +
    ` C${w * 0.75},${mid + amp} ${w * 0.75},${mid - amp} ${w / 2},${mid}` +
    ` C${w * 0.25},${mid + amp} ${w * 0.25},${mid - amp} 0,${mid} Z`;

  // ── Bottom shape (belowColor) ────────────────────────────────────────
  //   Follows the curve LEFT-to-RIGHT, then fills down to y=h.
  const bottomPath =
    `M0,${mid}` +
    ` C${w * 0.25},${mid - amp} ${w * 0.25},${mid + amp} ${w / 2},${mid}` +
    ` C${w * 0.75},${mid - amp} ${w * 0.75},${mid + amp} ${w},${mid}` +
    ` L${w},${h} L0,${h} Z`;

  return (
    <div
      className="absolute left-0 right-0 pointer-events-none z-30"
      style={{ bottom: `-${mid}px`, height: `${h}px` }}
    >
      <svg
        viewBox={`0 0 ${w} ${h}`}
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full block"
      >
        <path d={topPath} fill={aboveColor} />
        <path d={bottomPath} fill={belowColor} />
      </svg>
    </div>
  );
}
