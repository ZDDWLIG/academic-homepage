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
    period: "2025.09 — Present",
    position: "Ph.D. Candidate",
    institution: "Harbin Institute of Technology",
    department: "School of Mathematics",
  },
  {
    period: "2024.07 — 2024.08",
    position: "Visiting Student",
    institution: "The Hong Kong University of Science and Technology",
    department: "School of Mathematics",
  },
  {
    period: "2023.08 — 2024.07",
    position: "Research Intern",
    institution: "Shanghai Artificial Intelligence Laboratory",
    department: "AI for Science",
  },
  {
    period: "2023.05 — 2023.10",
    position: "Research Intern",
    institution: "Harbin Institute of Technology",
    department: "Research Center for Pattern Recognition and Intelligent Systems",
  },
  {
    period: "2021.09 — 2025.06",
    position: "Bachelor of Science",
    institution: "Harbin Institute of Technology",
    department: "School of Mathematics",
  },
];
