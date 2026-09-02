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
    title: "HC-MVSNet: A probability sampling-based multi-view-stereo network with hybrid cascade structure for 3D reconstruction",
    authors: "Tianxiang Gao, Zijian Hong, Yixing Tan, Lizhuo Sun, Yichen Wei, Jianwei Ma",
    venue: "Pattern Recognition Letters, 2024",
    year: 2024,
    paperUrl: "https://www.sciencedirect.com/science/article/pii/S0167865524002113",
  },
  {
    title: "GeoFormer: Geometry-Aware Transformer and its application to 5D First-Arrival Picking",
    authors: "Tianxiang Gao, Jianwei Ma",
    venue: "Submitted, 2026",
    year: 2026,
    paperUrl: "https://arxiv.org/abs/2608.25668",
    codeUrl: "https://github.com/ZDDWLIG/GeoFormer",
  },

];
