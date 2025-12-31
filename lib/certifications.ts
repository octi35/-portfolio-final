export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  credential?: string;
  skills: string[];
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Desarrollo Backend",
    issuer: "Curso Udemy",
    date: "2023",
    description: "Formación completa en desarrollo web frontend y backend, bases de datos y arquitectura de aplicaciones.",
    skills: ["React", "Node.js", "SQL", "APIs REST"],
  },
  {
    id: 2,
    title: "Power BI & Análisis de Datos",
    issuer: "Microsoft",
    date: "2023",
    description: "Certificación en visualización de datos, creación de dashboards interactivos y análisis empresarial.",
    skills: ["Power BI", "DAX", "Power Query", "Visualización"],
  },
  {
    id: 3,
    title: "Automatización con n8n",
    issuer: "Curso Online",
    date: "2024",
    description: "Automatización de procesos empresariales, integración de APIs y flujos de trabajo con IA.",
    skills: ["n8n", "APIs", "Webhooks", "Automatización"],
  },
];
