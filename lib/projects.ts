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
      "Plataforma web integral para crear y gestionar invitaciones digitales y organizar eventos de principio a fin. Incluye un panel de administración completo, manejo de listas de invitados con confirmación de asistencia (RSVP) en tiempo real, generación de invitaciones personalizadas y automatización de notificaciones por email y mensajería. Pensada para que organizadores de eventos centralicen toda la gestión en un solo lugar, con métricas de respuesta y recordatorios automáticos.",
    status: "Deployed",
    tech: "React, TypeScript, Node.js, SQL, Tailwind CSS, Automatización, Email API",
    image: "/images/joinme.png",
    demoUrl: "https://www.joinmear.com/",
    repoUrl: "#",
  },
  {
    id: 2,
    title: "Opero – Sistema de Gestión para PyMEs",
    description:
      "Sistema CRM/ERP completo diseñado para pequeñas y medianas empresas que necesitan profesionalizar su operación. Integra módulos de ventas, gestión de clientes, control de inventario, facturación y finanzas en una sola plataforma. Suma integraciones de automatización con IA para tareas repetitivas, seguimiento de oportunidades comerciales y reportes en tiempo real, ayudando a las PyMEs a tomar decisiones basadas en datos y reducir el trabajo manual.",
    status: "Deployed",
    tech: "React, TypeScript, .NET, C#, SQL Server, n8n, Tailwind CSS, REST API",
    image: "/images/Opero.png",
    demoUrl: "https://opero-henna.vercel.app/",
    repoUrl: "#",
  },
  {
    id: 3,
    title: "Fortek Automations – IA & Workflows",
    description:
      "Colección de automatizaciones inteligentes construidas para captar leads, nutrir oportunidades comerciales y centralizar la comunicación de la empresa en un inbox multicanal. Conecta WhatsApp, email y formularios web con flujos de trabajo automatizados en n8n, integrando modelos de IA para calificar contactos, responder consultas frecuentes y derivar conversaciones al equipo adecuado. Reduce los tiempos de respuesta y asegura que ningún lead quede sin seguimiento.",
    status: "In development",
    tech: "n8n, OpenAI API, JavaScript, Webhooks, REST API, WhatsApp API, Automatización",
    image: "/images/operoland.png",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 4,
    title: "StockPro – Gestión de Depósitos",
    description:
      "Sistema de gestión de inventarios y depósitos (warehouse management) orientado a empresas que manejan grandes volúmenes de productos. Ofrece un dashboard con métricas clave, control de stock en tiempo real, alertas de productos críticos o por debajo del mínimo, registro de movimientos de entrada y salida, gestión de proveedores y un módulo de auditoría para trazabilidad completa. Diseñado para minimizar quiebres de stock y optimizar la logística del depósito.",
    status: "Deployed",
    tech: "React, TypeScript, Node.js, SQL, Tailwind CSS, Recharts, REST API",
    image: "/images/stockpro.png",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 5,
    title: "AURA Pro X – Landing 3D",
    description:
      "Página web 3D inmersiva para el lanzamiento de auriculares premium, donde el producto es el protagonista. Combina una escena 3D interactiva renderizada en tiempo real, animaciones de scroll storytelling que revelan características a medida que el usuario navega y un diseño minimalista de alto impacto visual. El objetivo es transmitir la calidad del producto mediante una experiencia cinematográfica y fluida en cualquier dispositivo.",
    status: "Deployed",
    tech: "Three.js, React, React Three Fiber, GSAP, WebGL, Framer Motion, Tailwind CSS",
    image: "/images/aura.png",
    demoUrl: "https://3dwebscroll-5h1e9onx6-octi35s-projects.vercel.app",
    repoUrl: "#",
  },
  {
    id: 6,
    title: "Mercedes-Benz AMG – Web 3D",
    description:
      "Experiencia web 3D de alto nivel para la serie AMG de Mercedes-Benz, inspirada en las webs editoriales de las marcas automotrices premium. Incluye un configurador interactivo del vehículo en 3D, tipografía editorial cuidada, animaciones cinematográficas activadas por scroll y transiciones suaves entre secciones. Busca recrear la sensación de exclusividad de la marca a través del diseño y el movimiento.",
    status: "Deployed",
    tech: "Three.js, React, React Three Fiber, GSAP, WebGL, Framer Motion, Tailwind CSS",
    image: "/images/mercedes.png",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 7,
    title: "Sistema Contable – Automatización para Contadores",
    description:
      "Plataforma pensada para estudios contables que buscan automatizar las tareas repetitivas del día a día. Permite la carga automática de comprobantes, conciliaciones bancarias asistidas, generación de reportes contables e impositivos y flujos de trabajo integrados con APIs de organismos y bancos. Centraliza la información de múltiples clientes en un solo sistema, reduciendo errores manuales y liberando tiempo del equipo para tareas de mayor valor.",
    status: "In development",
    tech: "React, TypeScript, Node.js, SQL, n8n, REST API, Automatización",
    image: "/images/sistemacontable.png",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 8,
    title: "CV Analyzer – Análisis de CVs con IA",
    description:
      "Herramienta impulsada por inteligencia artificial que ayuda a reclutadores y equipos de RR.HH. a analizar currículums de forma rápida y objetiva. Integra el modelo Llama 3.3 para leer y comprender el contenido de cada CV, extraer experiencia, habilidades y formación, evaluar el grado de coincidencia con un puesto y generar un resumen con puntos fuertes y áreas a revisar. Acelera el proceso de selección, reduce el sesgo en la primera filtración y permite comparar candidatos de manera consistente.",
    status: "Deployed",
    tech: "React, TypeScript, Llama 3.3, IA, LLM, Node.js, REST API, Tailwind CSS",
    image: "/images/cvanalizar.png",
    demoUrl: "https://analizador-cva.vercel.app/",
    repoUrl: "#",
  },
  {
    id: 9,
    title: "Portfolio 3D – Landing Personal Inmersiva",
    description:
      "Landing page personal de alto impacto visual que combina un fondo estrellado con efectos de partículas en 3D y tipografía editorial de gran escala. El diseño minimalista pone el foco en la propuesta de valor del creativo, con animaciones de entrada fluidas, integración de email para captura de leads, links a redes sociales y un CTA principal. Cada elemento fue pensado para generar una primera impresión memorable y transmitir profesionalismo desde el primer segundo de carga.",
    status: "Deployed",
    tech: "React, Three.js, GSAP, WebGL, Framer Motion, Tailwind CSS, Partículas 3D",
    image: "/images/web3d1.jpeg",
    demoUrl: "https://imitacionweb2.vercel.app",
    repoUrl: "#",
  },
  {
    id: 10,
    title: "ToonHub – Showcase de Figuras 3D Coleccionables",
    description:
      "Showcase web inmersivo para una colección exclusiva de figuras 3D coleccionables con estética streetwear y diseño de alto impacto. Presenta cada figura en un slider editorial de pantalla completa con fondo de color dinámico, numeración cinematográfica y tipografía oversized. Cada slide combina el personaje 3D principal con variantes secundarias flotantes, descripción del producto y CTAs de acción directa. Diseñado para transmitir exclusividad y despertar el deseo coleccionable en el usuario desde el primer vistazo.",
    status: "Deployed",
    tech: "React, Three.js, GSAP, WebGL, Framer Motion, Tailwind CSS, Animaciones 3D",
    image: "/images/web3d2.jpeg",
    demoUrl: "https://imitacionweb.vercel.app",
    repoUrl: "#",
  },
];
