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
  {
    id: 4,
    title: "StockPro – Gestión de Depósitos",
    description:
      "Sistema de gestión de inventarios y depósitos (warehouse management) con dashboard, control de stock, alertas críticas, movimientos, proveedores y auditoría.",
    status: "Deployed",
    tech: "React, dashboard, inventario",
    image: "/images/stockpro.png",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 5,
    title: "AURA Pro X – Landing 3D",
    description:
      "Página web 3D inmersiva para auriculares premium, con escena interactiva, scroll storytelling y diseño minimalista enfocado en producto.",
    status: "Deployed",
    tech: "Three.js, React, 3D",
    image: "/images/aura.png",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 6,
    title: "Mercedes-Benz AMG – Web 3D",
    description:
      "Experiencia web 3D para la serie AMG de Mercedes-Benz, con tipografía editorial, animaciones cinematográficas y configurador interactivo.",
    status: "Deployed",
    tech: "Three.js, React, 3D",
    image: "/images/mercedes.png",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 7,
    title: "Sistema Contable – Automatización para Contadores",
    description:
      "Plataforma para estudios contables con automatizaciones de tareas repetitivas: carga de comprobantes, conciliaciones, reportes y flujos integrados con APIs.",
    status: "In development",
    tech: "Automatización, APIs, contable",
    image: "/images/sistemacontable.png",
    demoUrl: "#",
    repoUrl: "#",
  },
];
