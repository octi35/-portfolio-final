export interface TimelineItem {
  id: number;
  type: "experience" | "education";
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  skills?: string[];
  current?: boolean;
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    type: "experience",
    title: "Analista de Sistemas",
    organization: "Fortek Solutions",
    location: "Córdoba, Argentina",
    startDate: "Jun 2025",
    endDate: "Actualidad",
    current: true,
    description: "Diseño de soluciones tecnológicas inteligentes que combinan automatización, inteligencia artificial y desarrollo web para optimizar procesos empresariales. Desarrollo de aplicaciones con React, C# (.NET) y SQL Server, construcción de dashboards interactivos y herramientas de análisis de datos.",
    skills: ["React", "C#", ".NET", "SQL Server", "IA", "Automatización", "Power BI"],
  },
  {
    id: 2,
    type: "education",
    title: "Analista de Sistemas y Desarrollo de Software",
    organization: "Colegio Universitario IES",
    location: "Córdoba, Argentina",
    startDate: "Ene 2024",
    endDate: "Nov 2026",
    current: true,
    description: "Actualmente capacitándome como Analista de sistemas y desarrollo de software, enfocado en tecnologías modernas y metodologías ágiles.",
    skills: ["Visualización de datos", "SQL", "Desarrollo de software"],
  },
  {
    id: 3,
    type: "experience",
    title: "Desarrollador Web Freelance",
    organization: "Proyectos Monetizados (JoinMe & Opero)",
    location: "Córdoba, Argentina",
    startDate: "Ene 2023",
    endDate: "Ene 2024",
    description: "Desarrollo de aplicaciones web completas. JoinMe: plataforma para gestión de invitaciones digitales. Opero: sistema CRM/ERP para PyMEs con paneles administrativos, automatizaciones, notificaciones y reportes.",
    skills: ["React", "SQL", "Automatización", "APIs REST"],
  },
  {
    id: 4,
    type: "education",
    title: "Programación en Análisis de Sistemas",
    organization: "Teclab Instituto Técnico Superior",
    location: "Córdoba, Argentina",
    startDate: "Ene 2022",
    endDate: "Ene 2024",
    description: "Formación técnica en programación y análisis de sistemas, con enfoque en bases de datos y desarrollo de aplicaciones.",
    skills: ["SQL", "Bases de datos", "Programación"],
  },
  {
    id: 5,
    type: "experience",
    title: "Técnico de TI",
    organization: "NeuTech",
    location: "Córdoba, Argentina",
    startDate: "Ene 2022",
    endDate: "Oct 2022",
    description: "Soporte técnico, gestión de hardware y asistencia a usuarios finales. Manejo de base de datos, atención al público y resolución de problemas tecnológicos.",
    skills: ["Soporte técnico", "Hardware", "Atención al cliente"],
  },
];
