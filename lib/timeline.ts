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
  remote?: boolean;
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    type: "experience",
    title: "Full Stack Developer",
    organization: "Code Assurance",
    location: "Córdoba, Argentina",
    startDate: "2025",
    endDate: "Actualidad",
    current: true,
    remote: true,
    description: "Lidero el desarrollo end-to-end de aplicaciones web de gestión con React, C# (.NET Web API) y SQL Server, definiendo modelo de datos y arquitectura de APIs REST desde cero. Diseño automatizaciones con LLMs y n8n que eliminan 12 horas semanales de carga manual, y construyo dashboards en Power BI para 8 clientes/áreas de negocio. Ciclo completo bajo Scrum en sprints de 2 semanas.",
    skills: ["React", "C#", ".NET", "SQL Server", "APIs REST", "n8n", "Power BI", "Scrum"],
  },
  {
    id: 2,
    type: "education",
    title: "Analista de Sistemas y Desarrollo de Software",
    organization: "Colegio Universitario IES",
    location: "Córdoba, Argentina",
    startDate: "2024",
    endDate: "Nov 2026",
    current: true,
    description: "Carrera en curso, enfocada en desarrollo de software, bases de datos, análisis de sistemas y metodologías ágiles.",
    skills: ["Análisis de sistemas", "SQL", "Desarrollo de software"],
  },
  {
    id: 3,
    type: "experience",
    title: "Desarrollador Web Freelance — Opero & JoinMe",
    organization: "Proyectos Propios",
    location: "Córdoba, Argentina",
    startDate: "Ene 2024",
    endDate: "Actualidad",
    current: true,
    description: "Opero: ERP web para PyMEs (React + .NET/Node + PostgreSQL) con módulos de ventas, stock y usuarios, control de roles y reportes automáticos vía n8n; en uso activo por 4 empresas. JoinMe: plataforma de eventos e invitaciones digitales (React + APIs REST + PostgreSQL) con notificaciones automatizadas y confirmación de asistencia en tiempo real. Responsable del stack completo en ambos productos, del modelado de datos al despliegue.",
    skills: ["React", "Node.js", ".NET", "PostgreSQL", "APIs REST", "n8n", "Vercel"],
  },
  {
    id: 4,
    type: "experience",
    title: "Analista de Software",
    organization: "Fortek Solutions",
    location: "Córdoba, Argentina",
    startDate: "2024",
    endDate: "2025",
    remote: true,
    description: "Desarrollo de aplicaciones web de gestión full stack (React + .NET Web API + SQL Server) para clientes PyME, desde el relevamiento de requerimientos hasta el despliegue. Modelado de bases de datos relacionales, diseño de APIs REST reutilizables entre módulos e integración de automatizaciones con n8n y LLMs. Trabajo en equipos ágiles con testing y control de calidad previo a cada release.",
    skills: ["React", ".NET", "SQL Server", "APIs REST", "n8n", "IA", "Scrum"],
  },
  {
    id: 5,
    type: "experience",
    title: "Full Stack Developer",
    organization: "RCM Technologies",
    location: "Estados Unidos",
    startDate: "2023",
    endDate: "2024",
    remote: true,
    description: "Desarrollo de aplicaciones web internas y orientadas a clientes con React, Node.js y .NET, incluyendo modelado de bases de datos y diseño de APIs REST. Construcción de dashboards y reportes de negocio, e integración de servicios externos vía API. Colaboración en equipos distribuidos bajo metodologías ágiles, cubriendo análisis, desarrollo, testing y despliegue.",
    skills: ["React", "Node.js", ".NET", "APIs REST", "SQL", "Equipos distribuidos"],
  },
  {
    id: 6,
    type: "experience",
    title: "Full Stack Developer",
    organization: "Detect Technologies",
    location: "India",
    startDate: "2022",
    endDate: "2023",
    remote: true,
    description: "Desarrollo de plataformas de monitoreo industrial full stack con React, Node.js y bases de datos SQL/NoSQL. Construcción de APIs REST y sistemas de alertas en tiempo real, junto con módulos de visualización de datos para operadores. Participación en el ciclo completo del producto: frontend, backend, modelado de datos y despliegue en producción.",
    skills: ["React", "Node.js", "SQL", "NoSQL", "APIs REST", "Tiempo real"],
  },
  {
    id: 7,
    type: "experience",
    title: "Técnico de TI",
    organization: "NeuTech",
    location: "Córdoba, Argentina",
    startDate: "Ene 2022",
    endDate: "Oct 2022",
    description: "Soporte técnico de hardware y administración de bases de datos para operaciones internas de IT. Colaboración en proyectos internos de infraestructura y digitalización de procesos.",
    skills: ["Soporte técnico", "Hardware", "Bases de datos"],
  },
];
