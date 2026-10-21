import type { Localized, Translatable } from "@/lib/i18n";

export interface TimelineItem {
  id: number;
  type: "experience" | "education";
  title: Translatable;
  organization: Translatable;
  location: Translatable;
  startDate: Translatable;
  endDate: Translatable;
  description: Localized;
  skills?: Translatable[];
  current?: boolean;
  remote?: boolean;
}

const present: Localized = { es: "Actualidad", en: "Present" };
const restApis: Localized = { es: "APIs REST", en: "REST APIs" };

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    type: "experience",
    title: "Full Stack Developer",
    organization: "Code Assurance",
    location: "Córdoba, Argentina",
    startDate: "2025",
    endDate: present,
    current: true,
    remote: true,
    description: {
      es: "Lidero el desarrollo end-to-end de aplicaciones web de gestión con React, C# (.NET Web API) y SQL Server, definiendo modelo de datos y arquitectura de APIs REST desde cero. Diseño automatizaciones con LLMs y n8n que eliminan 12 horas semanales de carga manual, y construyo dashboards en Power BI para 8 clientes/áreas de negocio. Ciclo completo bajo Scrum en sprints de 2 semanas.",
      en: "I lead end-to-end development of business management web applications with React, C# (.NET Web API) and SQL Server, defining the data model and REST API architecture from scratch. I design automations with LLMs and n8n that eliminate 12 hours of manual data entry per week, and I build Power BI dashboards for 8 clients/business areas. Full development cycle under Scrum in 2-week sprints.",
    },
    skills: ["React", "C#", ".NET", "SQL Server", restApis, "n8n", "Power BI", "Scrum"],
  },
  {
    id: 2,
    type: "education",
    title: {
      es: "Analista de Sistemas y Desarrollo de Software",
      en: "Systems Analysis & Software Development",
    },
    organization: "Colegio Universitario IES",
    location: "Córdoba, Argentina",
    startDate: "2024",
    endDate: "Nov 2026",
    current: true,
    description: {
      es: "Carrera en curso, enfocada en desarrollo de software, bases de datos, análisis de sistemas y metodologías ágiles.",
      en: "Degree in progress, focused on software development, databases, systems analysis and agile methodologies.",
    },
    skills: [
      { es: "Análisis de sistemas", en: "Systems analysis" },
      "SQL",
      { es: "Desarrollo de software", en: "Software development" },
    ],
  },
  {
    id: 3,
    type: "experience",
    title: {
      es: "Desarrollador Web Freelance — Opero & JoinMe",
      en: "Freelance Web Developer — Opero & JoinMe",
    },
    organization: { es: "Proyectos Propios", en: "Independent Projects" },
    location: "Córdoba, Argentina",
    startDate: { es: "Ene 2024", en: "Jan 2024" },
    endDate: present,
    current: true,
    description: {
      es: "Opero: ERP web para PyMEs (React + .NET/Node + PostgreSQL) con módulos de ventas, stock y usuarios, control de roles y reportes automáticos vía n8n; en uso activo por 4 empresas. JoinMe: plataforma de eventos e invitaciones digitales (React + APIs REST + PostgreSQL) con notificaciones automatizadas y confirmación de asistencia en tiempo real. Responsable del stack completo en ambos productos, del modelado de datos al despliegue.",
      en: "Opero: web-based ERP for SMBs (React + .NET/Node + PostgreSQL) with sales, inventory and user modules, role-based access control and automated reports via n8n; actively used by 4 companies. JoinMe: event and digital invitation platform (React + REST APIs + PostgreSQL) with automated notifications and real-time RSVP. Responsible for the full stack of both products, from data modeling to deployment.",
    },
    skills: ["React", "Node.js", ".NET", "PostgreSQL", restApis, "n8n", "Vercel"],
  },
  {
    id: 4,
    type: "experience",
    title: { es: "Analista de Software", en: "Software Analyst" },
    organization: "Fortek Solutions",
    location: "Córdoba, Argentina",
    startDate: "2024",
    endDate: "2025",
    remote: true,
    description: {
      es: "Desarrollo de aplicaciones web de gestión full stack (React + .NET Web API + SQL Server) para clientes PyME, desde el relevamiento de requerimientos hasta el despliegue. Modelado de bases de datos relacionales, diseño de APIs REST reutilizables entre módulos e integración de automatizaciones con n8n y LLMs. Trabajo en equipos ágiles con testing y control de calidad previo a cada release.",
      en: "Built full-stack business management web applications (React + .NET Web API + SQL Server) for SMB clients, from requirements gathering to deployment. Relational database modeling, design of REST APIs reused across modules and integration of automations with n8n and LLMs. Worked in agile teams with testing and quality control before every release.",
    },
    skills: ["React", ".NET", "SQL Server", restApis, "n8n", { es: "IA", en: "AI" }, "Scrum"],
  },
  {
    id: 5,
    type: "experience",
    title: "Full Stack Developer",
    organization: "RCM Technologies",
    location: { es: "Estados Unidos", en: "United States" },
    startDate: "2023",
    endDate: "2024",
    remote: true,
    description: {
      es: "Desarrollo de aplicaciones web internas y orientadas a clientes con React, Node.js y .NET, incluyendo modelado de bases de datos y diseño de APIs REST. Construcción de dashboards y reportes de negocio, e integración de servicios externos vía API. Colaboración en equipos distribuidos bajo metodologías ágiles, cubriendo análisis, desarrollo, testing y despliegue.",
      en: "Developed internal and client-facing web applications with React, Node.js and .NET, including database modeling and REST API design. Built business dashboards and reports, and integrated external services via APIs. Collaborated in distributed teams using agile methodologies, covering analysis, development, testing and deployment.",
    },
    skills: ["React", "Node.js", ".NET", restApis, "SQL", { es: "Equipos distribuidos", en: "Distributed teams" }],
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
    description: {
      es: "Desarrollo de plataformas de monitoreo industrial full stack con React, Node.js y bases de datos SQL/NoSQL. Construcción de APIs REST y sistemas de alertas en tiempo real, junto con módulos de visualización de datos para operadores. Participación en el ciclo completo del producto: frontend, backend, modelado de datos y despliegue en producción.",
      en: "Developed full-stack industrial monitoring platforms with React, Node.js and SQL/NoSQL databases. Built REST APIs and real-time alerting systems, along with data visualization modules for operators. Took part in the full product cycle: frontend, backend, data modeling and production deployment.",
    },
    skills: ["React", "Node.js", "SQL", "NoSQL", restApis, { es: "Tiempo real", en: "Real-time" }],
  },
  {
    id: 7,
    type: "experience",
    title: { es: "Técnico de TI", en: "IT Technician" },
    organization: "NeuTech",
    location: "Córdoba, Argentina",
    startDate: { es: "Ene 2022", en: "Jan 2022" },
    endDate: "Oct 2022",
    description: {
      es: "Soporte técnico de hardware y administración de bases de datos para operaciones internas de IT. Colaboración en proyectos internos de infraestructura y digitalización de procesos.",
      en: "Hardware technical support and database administration for internal IT operations. Contributed to internal infrastructure and process digitization projects.",
    },
    skills: [
      { es: "Soporte técnico", en: "Technical support" },
      "Hardware",
      { es: "Bases de datos", en: "Databases" },
    ],
  },
];
