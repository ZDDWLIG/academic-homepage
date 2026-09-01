// ─────────────────────────────────────────────────────────────────────────────
// Publications — listed newest-first. All entries are PLACEHOLDERS.
// Replace with your real papers (title, authors, venue, year, links).
// ─────────────────────────────────────────────────────────────────────────────

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  paperUrl?: string;
  codeUrl?: string;
}

export const publications: Publication[] = [
  {
    title: "Seismic Foundation Models for Multi-view Prestack Data",
    authors: "Tianxiang Gao, Author Two, Author Three",
    venue: "Placeholder Journal, 2026",
    year: 2026,
    paperUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Generative Reconstruction of Seismic Data with Diffusion Models",
    authors: "Tianxiang Gao, Author Two, Author Three",
    venue: "Placeholder Conference, 2024",
    year: 2024,
    paperUrl: "#",
  },
  {
    title: "Deep Learning for Seismic Data Interpolation",
    authors: "Tianxiang Gao, Author Two",
    venue: "Pattern Recognition Letters, 2024",
    year: 2024,
    paperUrl: "#",
  },
];
