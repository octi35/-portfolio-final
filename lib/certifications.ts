import type { Localized, Translatable } from "@/lib/i18n";

export interface Certification {
  id: number;
  title: Translatable;
  issuer: Translatable;
  date: string;
  description: Localized;
  credential?: string;
  skills: Translatable[];
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Microsoft Back-End Developer",
    issuer: {
      es: "Microsoft (Certificado Profesional)",
      en: "Microsoft (Professional Certificate)",
    },
    date: "2025",
    description: {
      es: "Certificado profesional en desarrollo backend: diseño de APIs REST, bases de datos y arquitectura de aplicaciones del lado del servidor.",
      en: "Professional certificate in back-end development: REST API design, databases and server-side application architecture.",
    },
    skills: [
      "Backend",
      { es: "APIs REST", en: "REST APIs" },
      "SQL",
      { es: "Arquitectura", en: "Architecture" },
    ],
  },
  {
    id: 2,
    title: {
      es: "Power BI: Crea un Dashboard desde cero",
      en: "Power BI: Build a Dashboard from Scratch",
    },
    issuer: "Udemy",
    date: "2024",
    description: {
      es: "Visualización de datos, modelado y creación de dashboards interactivos para análisis empresarial.",
      en: "Data visualization, data modeling and building interactive dashboards for business analysis.",
    },
    skills: ["Power BI", "DAX", "Power Query", { es: "Visualización", en: "Visualization" }],
  },
  {
    id: 3,
    title: {
      es: "Python sin Fronteras: HTML, CSS, Flask y MySQL",
      en: "Python Without Borders: HTML, CSS, Flask & MySQL",
    },
    issuer: "Udemy",
    date: "2024",
    description: {
      es: "Desarrollo web full stack con Python y Flask, integrando frontend, bases de datos MySQL y despliegue de aplicaciones.",
      en: "Full-stack web development with Python and Flask, covering the frontend, MySQL databases and application deployment.",
    },
    skills: ["Python", "Flask", "MySQL", "HTML / CSS"],
  },
];
