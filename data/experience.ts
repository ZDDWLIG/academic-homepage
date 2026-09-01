// ─────────────────────────────────────────────────────────────────────────────
// Experience — listed most-recent-first. PLACEHOLDER data.
// ─────────────────────────────────────────────────────────────────────────────

export interface Experience {
  period: string;
  position: string;
  institution: string;
  department?: string;
  description?: string;
}

export const experience: Experience[] = [
  {
    period: "2024 — Present",
    position: "Ph.D. Researcher",
    institution: "Harbin Institute of Technology",
    department: "School of Mathematics",
    description: "Research on artificial intelligence and seismic geophysics.",
  },
  {
    period: "2021 — 2024",
    position: "Undergraduate Researcher",
    institution: "Harbin Institute of Technology",
    department: "School of Mathematics",
    description: "Placeholder — replace with your actual experience.",
  },
];
