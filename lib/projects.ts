import type { Localized, Translatable } from "@/lib/i18n";

export interface Project {
  id: number;
  title: Localized;
  description: Localized;
  status: "Deployed" | "In development";
  tech: Translatable;
  image: string;
  demoUrl: string;
  repoUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: {
      es: "JoinMe – Invitaciones Digitales",
      en: "JoinMe – Digital Invitations",
    },
    description: {
      es: "Plataforma web integral para crear y gestionar invitaciones digitales y organizar eventos de principio a fin. Incluye un panel de administración completo, manejo de listas de invitados con confirmación de asistencia (RSVP) en tiempo real, generación de invitaciones personalizadas y automatización de notificaciones por email y mensajería. Pensada para que organizadores de eventos centralicen toda la gestión en un solo lugar, con métricas de respuesta y recordatorios automáticos.",
      en: "End-to-end web platform for creating and managing digital invitations and organizing events from start to finish. It includes a full admin panel, guest list management with real-time RSVP tracking, personalized invitation generation and automated email and messaging notifications. Built so event organizers can run everything from one place, with response metrics and automatic reminders.",
    },
    status: "Deployed",
    tech: {
      es: "React, TypeScript, Node.js, SQL, Tailwind CSS, Automatización, Email API",
      en: "React, TypeScript, Node.js, SQL, Tailwind CSS, Automation, Email API",
    },
    image: "/images/joinme.png",
    demoUrl: "https://www.joinmear.com/",
    repoUrl: "#",
  },
  {
    id: 2,
    title: {
      es: "Opero – Sistema de Gestión para PyMEs",
      en: "Opero – Management System for SMBs",
    },
    description: {
      es: "Sistema CRM/ERP completo diseñado para pequeñas y medianas empresas que necesitan profesionalizar su operación. Integra módulos de ventas, gestión de clientes, control de inventario, facturación y finanzas en una sola plataforma. Suma integraciones de automatización con IA para tareas repetitivas, seguimiento de oportunidades comerciales y reportes en tiempo real, ayudando a las PyMEs a tomar decisiones basadas en datos y reducir el trabajo manual.",
      en: "Complete CRM/ERP system designed for small and medium-sized businesses that need to professionalize their operations. It brings sales, customer management, inventory control, invoicing and finance modules together in a single platform. It adds AI-powered automation for repetitive tasks, sales opportunity tracking and real-time reporting, helping SMBs make data-driven decisions and cut down on manual work.",
    },
    status: "Deployed",
    tech: "React, TypeScript, .NET, C#, SQL Server, n8n, Tailwind CSS, REST API",
    image: "/images/Opero.png",
    demoUrl: "https://opero-henna.vercel.app/",
    repoUrl: "#",
  },
  {
    id: 3,
    title: {
      es: "Respondo – SaaS de Atención al Cliente con IA",
      en: "Respondo – AI Customer Service SaaS",
    },
    description: {
      es: "SaaS full-stack de atención al cliente y ventas potenciado por IA, pensado para pymes que venden por chat. Un agente conversacional con Gemini, fallback a OpenRouter y motor de reglas local atiende WhatsApp, Instagram Direct, Facebook Messenger y Email en una bandeja unificada, entendiendo texto, imágenes y notas de voz. Cada conversación alimenta un CRM integrado con scoring de intención de compra, etapas de embudo y handoff a un humano en cualquier momento. El sistema genera links de pago reales de Mercado Pago, sincroniza catálogo con TiendaNube, Shopify y WooCommerce, corre campañas de difusión y seguimientos automáticos para recuperar carritos abandonados, y expone métricas de conversión y facturación.",
      en: "Full-stack AI-powered customer service and sales SaaS, built for small businesses that sell over chat. A conversational agent running on Gemini, with an OpenRouter fallback and a local rules engine, handles WhatsApp, Instagram Direct, Facebook Messenger and Email from a unified inbox, understanding text, images and voice notes. Every conversation feeds a built-in CRM with purchase-intent scoring, funnel stages and handoff to a human at any time. The system generates real Mercado Pago payment links, syncs the catalog with TiendaNube, Shopify and WooCommerce, runs broadcast campaigns and automated follow-ups to recover abandoned carts, and surfaces conversion and revenue metrics.",
    },
    status: "Deployed",
    tech: "React 19, TypeScript, Vite, Tailwind 4, Express, Supabase, PostgreSQL, Auth, RLS, Docker, Render, Railway",
    image: "/images/respondo.jpeg",
    demoUrl: "#",
    repoUrl: "https://github.com/octi35/Proyecto-chatbot-y-prospectador-con-ia.git",
  },
  {
    id: 4,
    title: {
      es: "StockPro – Gestión de Depósitos",
      en: "StockPro – Warehouse Management",
    },
    description: {
      es: "Sistema de gestión de inventarios y depósitos (warehouse management) orientado a empresas que manejan grandes volúmenes de productos. Ofrece un dashboard con métricas clave, control de stock en tiempo real, alertas de productos críticos o por debajo del mínimo, registro de movimientos de entrada y salida, gestión de proveedores y un módulo de auditoría para trazabilidad completa. Diseñado para minimizar quiebres de stock y optimizar la logística del depósito.",
      en: "Inventory and warehouse management system aimed at companies that handle large product volumes. It offers a dashboard with key metrics, real-time stock control, alerts for critical or below-minimum products, inbound and outbound movement logs, supplier management and an audit module for full traceability. Designed to minimize stockouts and optimize warehouse logistics.",
    },
    status: "Deployed",
    tech: "React, TypeScript, Node.js, SQL, Tailwind CSS, Recharts, REST API",
    image: "/images/stockpro.png",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 5,
    title: {
      es: "AURA Pro X – Landing 3D",
      en: "AURA Pro X – 3D Landing Page",
    },
    description: {
      es: "Página web 3D inmersiva para el lanzamiento de auriculares premium, donde el producto es el protagonista. Combina una escena 3D interactiva renderizada en tiempo real, animaciones de scroll storytelling que revelan características a medida que el usuario navega y un diseño minimalista de alto impacto visual. El objetivo es transmitir la calidad del producto mediante una experiencia cinematográfica y fluida en cualquier dispositivo.",
      en: "Immersive 3D website for the launch of premium headphones, where the product takes center stage. It combines an interactive 3D scene rendered in real time, scroll-driven storytelling animations that reveal features as the user navigates, and a high-impact minimalist design. The goal is to convey the product's quality through a smooth, cinematic experience on any device.",
    },
    status: "Deployed",
    tech: "Three.js, React, React Three Fiber, GSAP, WebGL, Framer Motion, Tailwind CSS",
    image: "/images/aura.png",
    demoUrl: "https://3dwebscroll-5h1e9onx6-octi35s-projects.vercel.app",
    repoUrl: "#",
  },
  {
    id: 6,
    title: {
      es: "Blanca Patagonia PMS – Gestión Hotelera",
      en: "Blanca Patagonia PMS – Hotel Management",
    },
    description: {
      es: "Sistema integral de gestión hotelera full-stack desarrollado para una hostería boutique y cabañas de El Calafate. Reemplaza al software heredado WinPax y reduce la dependencia de Booking mediante un motor de reservas propio. La aplicación separa dos vistas: un panel interno por roles para administración, gerencia, recepción y housekeeping, y un portal público de reservas para huéspedes. Su núcleo es un motor de disponibilidad que hace imposible el overbooking, resuelto con una restricción de exclusión de PostgreSQL. Está construido con Next.js 16 y Supabase, con seguridad por Row Level Security en todas las tablas, cobertura de tests y documentación de arquitectura al estilo de una entrega profesional.",
      en: "Full-stack hotel management system built for a boutique inn and cabins in El Calafate. It replaces the legacy WinPax software and reduces dependence on Booking through an in-house booking engine. The app is split into two views: a role-based internal dashboard for administration, management, front desk and housekeeping, and a public booking portal for guests. Its core is an availability engine that makes overbooking impossible, enforced with a PostgreSQL exclusion constraint. It's built with Next.js 16 and Supabase, with Row Level Security on every table, test coverage and architecture documentation to the standard of a professional delivery.",
    },
    status: "Deployed",
    tech: "Next.js 16, Supabase, PostgreSQL, RLS, TypeScript, Tests, ADRs",
    image: "/images/hotel.jpeg",
    demoUrl: "#",
    repoUrl: "https://github.com/octi35/BlancaPatgoniaHotelApp.git",
  },
  {
    id: 7,
    title: {
      es: "Sistema Contable – Automatización para Contadores",
      en: "Accounting System – Automation for Accountants",
    },
    description: {
      es: "Plataforma pensada para estudios contables que buscan automatizar las tareas repetitivas del día a día. Permite la carga automática de comprobantes, conciliaciones bancarias asistidas, generación de reportes contables e impositivos y flujos de trabajo integrados con APIs de organismos y bancos. Centraliza la información de múltiples clientes en un solo sistema, reduciendo errores manuales y liberando tiempo del equipo para tareas de mayor valor.",
      en: "Platform for accounting firms looking to automate their repetitive day-to-day tasks. It supports automatic upload of receipts and invoices, assisted bank reconciliation, accounting and tax report generation, and workflows integrated with government agency and bank APIs. It centralizes information from multiple clients in a single system, reducing manual errors and freeing up the team's time for higher-value work.",
    },
    status: "In development",
    tech: {
      es: "React, TypeScript, Node.js, SQL, n8n, REST API, Automatización",
      en: "React, TypeScript, Node.js, SQL, n8n, REST API, Automation",
    },
    image: "/images/sistemacontable.png",
    demoUrl: "https://estudiocontable-kappa.vercel.app/login",
    repoUrl: "#",
  },
  {
    id: 8,
    title: {
      es: "CV Analyzer – Análisis de CVs con IA",
      en: "CV Analyzer – AI-Powered Resume Screening",
    },
    description: {
      es: "Herramienta impulsada por inteligencia artificial que ayuda a reclutadores y equipos de RR.HH. a analizar currículums de forma rápida y objetiva. Integra el modelo Llama 3.3 para leer y comprender el contenido de cada CV, extraer experiencia, habilidades y formación, evaluar el grado de coincidencia con un puesto y generar un resumen con puntos fuertes y áreas a revisar. Acelera el proceso de selección, reduce el sesgo en la primera filtración y permite comparar candidatos de manera consistente.",
      en: "AI-powered tool that helps recruiters and HR teams analyze resumes quickly and objectively. It integrates the Llama 3.3 model to read and understand each CV, extract experience, skills and education, assess how well the candidate matches a role and generate a summary with strengths and areas to review. It speeds up the hiring process, reduces bias in the first screening and makes it possible to compare candidates consistently.",
    },
    status: "Deployed",
    tech: {
      es: "React, TypeScript, Llama 3.3, IA, LLM, Node.js, REST API, Tailwind CSS",
      en: "React, TypeScript, Llama 3.3, AI, LLM, Node.js, REST API, Tailwind CSS",
    },
    image: "/images/cvanalizar.png",
    demoUrl: "https://analizador-cva.vercel.app/",
    repoUrl: "#",
  },
  {
    id: 9,
    title: {
      es: "Portfolio 3D – Landing Personal Inmersiva",
      en: "3D Portfolio – Immersive Personal Landing Page",
    },
    description: {
      es: "Landing page personal de alto impacto visual que combina un fondo estrellado con efectos de partículas en 3D y tipografía editorial de gran escala. El diseño minimalista pone el foco en la propuesta de valor del creativo, con animaciones de entrada fluidas, integración de email para captura de leads, links a redes sociales y un CTA principal. Cada elemento fue pensado para generar una primera impresión memorable y transmitir profesionalismo desde el primer segundo de carga.",
      en: "Visually striking personal landing page that combines a starry background with 3D particle effects and large-scale editorial typography. The minimalist design keeps the focus on the creative's value proposition, with smooth entrance animations, email integration for lead capture, social media links and a main CTA. Every element was designed to make a memorable first impression and convey professionalism from the very first second of loading.",
    },
    status: "Deployed",
    tech: {
      es: "React, Three.js, GSAP, WebGL, Framer Motion, Tailwind CSS, Partículas 3D",
      en: "React, Three.js, GSAP, WebGL, Framer Motion, Tailwind CSS, 3D Particles",
    },
    image: "/images/web3d1.jpeg",
    demoUrl: "https://imitacionweb2.vercel.app",
    repoUrl: "#",
  },
  {
    id: 10,
    title: {
      es: "ToonHub – Showcase de Figuras 3D Coleccionables",
      en: "ToonHub – 3D Collectible Figures Showcase",
    },
    description: {
      es: "Showcase web inmersivo para una colección exclusiva de figuras 3D coleccionables con estética streetwear y diseño de alto impacto. Presenta cada figura en un slider editorial de pantalla completa con fondo de color dinámico, numeración cinematográfica y tipografía oversized. Cada slide combina el personaje 3D principal con variantes secundarias flotantes, descripción del producto y CTAs de acción directa. Diseñado para transmitir exclusividad y despertar el deseo coleccionable en el usuario desde el primer vistazo.",
      en: "Immersive web showcase for an exclusive collection of 3D collectible figures with a streetwear aesthetic and high-impact design. Each figure is presented in a full-screen editorial slider with a dynamic background color, cinematic numbering and oversized typography. Every slide pairs the main 3D character with floating secondary variants, a product description and direct calls to action. Designed to convey exclusivity and make collectors want it from the very first glance.",
    },
    status: "Deployed",
    tech: {
      es: "React, Three.js, GSAP, WebGL, Framer Motion, Tailwind CSS, Animaciones 3D",
      en: "React, Three.js, GSAP, WebGL, Framer Motion, Tailwind CSS, 3D Animations",
    },
    image: "/images/web3d2.jpeg",
    demoUrl: "https://imitacionweb.vercel.app",
    repoUrl: "#",
  },
];
