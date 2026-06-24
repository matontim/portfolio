export interface Project {
  title: string;
  year: number;
  description: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: "Secure Genomics Pipeline",
    year: 2026,
    description:
      "Bioinformatics workflow using Python and R for quality control, normalization, PCA, and differential expression analysis.",
    slug: "secure-genomics-pipeline",
  },
  {
    title: "Study Planner Web Application",
    year: 2026,
    description:
      "Full-stack productivity application currently in deployment, focused on API integration, frontend-backend communication, and user-centered design.",
    slug: "study-planner-web-app",
  },
];