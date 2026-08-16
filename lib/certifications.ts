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
    title: "Microsoft Back-End Developer",
    issuer: "Microsoft (Certificado Profesional)",
    date: "2025",
    description: "Certificado profesional en desarrollo backend: diseño de APIs REST, bases de datos y arquitectura de aplicaciones del lado del servidor.",
    skills: ["Backend", "APIs REST", "SQL", "Arquitectura"],
  },
  {
    id: 2,
    title: "Power BI: Crea un Dashboard desde cero",
    issuer: "Udemy",
    date: "2024",
    description: "Visualización de datos, modelado y creación de dashboards interactivos para análisis empresarial.",
    skills: ["Power BI", "DAX", "Power Query", "Visualización"],
  },
  {
    id: 3,
    title: "Python sin Fronteras: HTML, CSS, Flask y MySQL",
    issuer: "Udemy",
    date: "2024",
    description: "Desarrollo web full stack con Python y Flask, integrando frontend, bases de datos MySQL y despliegue de aplicaciones.",
    skills: ["Python", "Flask", "MySQL", "HTML / CSS"],
  },
];
