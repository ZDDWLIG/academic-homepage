// ─────────────────────────────────────────────────────────────────────────────
// Personal profile — edit this file to update the hero, about, and links.
// Every value below is a PLACEHOLDER (except name / GitHub). Replace before
// publishing, or leave obvious placeholders in place for now.
// ─────────────────────────────────────────────────────────────────────────────

export interface ResearchDirection {
  index: string;
  title: string;
  description: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  intro: string;
  bio: string[];
  avatar: string;
  email: string;
  github: string;
  orcid: string;
  googleScholar?: string;
  cv?: string;
  researchInterests: string[];
  researchDirections?: ResearchDirection[];
}

export const profile: Profile = {
  name: "Tianxiang Gao",
  title: "AI × Geophysics",
  location: "Harbin, China",

  // Short intro shown in the hero.
  intro:
    "Interested in the intersection of artificial intelligence and exploration geophysics.",

  // Full bio shown in the About section.
  bio: [
    "I am a PhD candidate at the School of Mathematics, Harbin Institute of Technology. My research focuses on the application and adaptation of AI methods to exploration geophysics.",
    "My current research interests span three areas: complex noise attenuation in seismic data, first-arrival picking under strong background noise, and foundation models for prestack seismic data.",
  ],

  // Placeholder avatar. Swap in a real portrait (e.g. /avatar.jpg) when ready.
  avatar: "/avatar.jpg",

  // Links — replace placeholders with your real profiles.
  email: "25b912019@stu.hit.edu.cn", // TODO: replace with your email
  github: "https://github.com/ZDDWLIG",
  orcid: "https://orcid.org/0009-0001-7157-5368", // TODO: replace
  // googleScholar: "https://scholar.google.com/citations?user=YOUR_ID", // TODO: replace
  // cv: "/cv.pdf",

  researchInterests: [
    "Artificial Intelligence",
    "Seismic Data Processing",
    "Foundation Models",
    "Generative AI",
  ],

  // researchDirections: [
  //   {
  //     index: "01",
  //     title: "Seismic Foundation Models",
  //     description:
  //       "Learning general-purpose representations for multi-view prestack seismic data.",
  //   },
  //   {
  //     index: "02",
  //     title: "Seismic Reconstruction",
  //     description:
  //       "Deep generative models for seismic data reconstruction and compensation.",
  //   },
  //   {
  //     index: "03",
  //     title: "Generative AI for Geophysics",
  //     description:
  //       "Diffusion models and generative models for intelligent seismic processing.",
  //   },
  // ],
};
