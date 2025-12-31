export interface Project {
  id: number;
  title: string;
  description: string;
  status: "Deployed" | "In development";
  tech: string;
  image: string;
  demoUrl: string;
  repoUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "JoinMe – Invitaciones Digitales",
    description:
      "Plataforma web para gestión de invitaciones digitales y organización de eventos. Incluye panel de administración, manejo de invitados y automatización de notificaciones.",
    status: "Deployed",
    tech: "React, SQL, automatización",
    image: "/images/joinme.png",
    demoUrl: "https://www.joinmear.com/",
    repoUrl: "#",
  },
  {
    id: 2,
    title: "Opero – Sistema de Gestión para PyMEs",
    description:
      "Sistema CRM/ERP para pequeñas y medianas empresas, con módulos de ventas, inventario, finanzas e integraciones de automatización con IA.",
    status: "In development",
    tech: "React, .NET, SQL Server, n8n",
    image: "/images/Opero.png",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 3,
    title: "Fortek Automations – IA & Workflows",
    description:
      "Colección de automatizaciones con IA para captar leads, nutrir oportunidades y centralizar comunicaciones en un inbox multicanal.",
    status: "In development",
    tech: "n8n, APIs, automatización",
    image: "/images/operoland.png",
    demoUrl: "#",
    repoUrl: "#",
  },
];
