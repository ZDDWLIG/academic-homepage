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
  googleScholar: string;
  cv: string;
  researchInterests: string[];
  researchDirections: ResearchDirection[];
}

export const profile: Profile = {
  name: "Tianxiang Gao",
  title: "AI × Seismic Geophysics",
  location: "Harbin, China",

  // Short intro shown in the hero.
  intro:
    "I am a researcher working at the intersection of artificial intelligence and geophysics, with a focus on seismic data processing, foundation models, and generative AI.",

  // Full bio shown in the About section.
  bio: [
    "I am a Ph.D. researcher in the School of Mathematics at Harbin Institute of Technology, where I work on machine-learning methods for seismic data processing and interpretation.",
    "My research combines foundation models, diffusion models, and generative approaches to address long-standing problems in seismic reconstruction, interpolation, and compensation. I am broadly interested in building general-purpose representations of subsurface data that transfer across surveys and acquisition geometries.",
  ],

  // Placeholder avatar. Swap in a real portrait (e.g. /avatar.jpg) when ready.
  avatar: "/avatar.svg",

  // Links — replace placeholders with your real profiles.
  email: "you@example.com", // TODO: replace with your email
  github: "https://github.com/ZDDWLIG",
  orcid: "https://orcid.org/0000-0000-0000-0000", // TODO: replace
  googleScholar: "https://scholar.google.com/citations?user=YOUR_ID", // TODO: replace
  cv: "/cv.pdf",

  researchInterests: [
    "Artificial Intelligence",
    "Seismic Geophysics",
    "Foundation Models",
    "Generative AI",
    "Seismic Data Processing",
  ],

  researchDirections: [
    {
      index: "01",
      title: "Seismic Foundation Models",
      description:
        "Learning general-purpose representations for multi-view prestack seismic data.",
    },
    {
      index: "02",
      title: "Seismic Reconstruction",
      description:
        "Deep generative models for seismic data reconstruction and compensation.",
    },
    {
      index: "03",
      title: "Generative AI for Geophysics",
      description:
        "Diffusion models and generative models for intelligent seismic processing.",
    },
  ],
};
