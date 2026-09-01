// A quiet, monochrome seismic "wiggle trace" motif — the one visual signature of
// the page. Draws either a horizontal seismogram line ("wave") or a small set of
// vertical traces ("section"). Rendered server-side; colors via currentColor.
interface SeismicTraceProps {
  variant?: "wave" | "section";
  width?: number;
  height?: number;
  traces?: number;
  className?: string;
  strokeWidth?: number;
}

export default function SeismicTrace({
  variant = "wave",
  width,
  height,
  traces = 5,
  className,
  strokeWidth = 1.25,
}: SeismicTraceProps) {
  const w = width ?? (variant === "wave" ? 260 : 40);
  const h = height ?? (variant === "wave" ? 24 : 26);

  if (variant === "section") {
    const paths: string[] = [];
    const samples = 40;
    const spacing = w / traces;
    for (let j = 0; j < traces; j++) {
      const xc = (j + 0.5) * spacing;
      let d = "";
      for (let i = 0; i <= samples; i++) {
        const y = (i / samples) * h;
        const t = i / samples;
        const env = Math.sin(Math.PI * t);
        const wiggle =
          Math.sin(t * Math.PI * 6 + j * 1.1) * 0.55 +
          Math.sin(t * Math.PI * 2.4 + j * 1.8) * 0.35 +
          Math.sin(t * Math.PI * 11 + j * 2.4) * 0.15;
        const x = xc + wiggle * env * Math.max(1, spacing / 2 - 1);
        d += (i === 0 ? "M" : "L") + x.toFixed(1) + " " + y.toFixed(1);
      }
      paths.push(d);
    }
    return (
      <svg
        width={w}
        height={h}
        viewBox={`0 0 ${w} ${h}`}
        fill="none"
        className={className}
        aria-hidden="true"
      >
        {paths.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </svg>
    );
  }

  // Horizontal waveform
  const pts: string[] = [];
  const n = 140;
  for (let i = 0; i <= n; i++) {
    const x = (i / n) * w;
    const t = i / n;
    const env = Math.sin(Math.PI * t);
    const wiggle =
      Math.sin(t * Math.PI * 6) * 0.5 +
      Math.sin(t * Math.PI * 2.6 + 1.2) * 0.3 +
      Math.sin(t * Math.PI * 13) * 0.2;
    const y = h / 2 + wiggle * env * (h / 2 - 2);
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <polyline
        points={pts.join(" ")}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
