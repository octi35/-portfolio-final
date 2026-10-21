"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ExternalLink } from "lucide-react";
import { projects, type Project } from "@/lib/projects";
import { localize, type Locale, type Translatable } from "@/lib/i18n";
import CaseStudies, { RichText } from "@/components/CaseStudies";

const subtitles: Record<number, Translatable> = {
  1: { es: "Plataforma de Eventos · React & SQL", en: "Event Platform · React & SQL" },
  2: { es: "Sistema CRM/ERP · React, .NET & SQL Server", en: "CRM/ERP System · React, .NET & SQL Server" },
  3: { es: "SaaS de atención al cliente · IA & Supabase", en: "Customer service SaaS · AI & Supabase" },
  4: "Warehouse Management · React",
  5: { es: "Landing 3D · Three.js & React", en: "3D Landing Page · Three.js & React" },
  6: { es: "Gestión hotelera · Next.js & Supabase", en: "Hotel management · Next.js & Supabase" },
  7: { es: "Sistema Contable · Automatización & APIs", en: "Accounting System · Automation & APIs" },
  8: { es: "Análisis de CVs con IA · Llama 3.3", en: "AI resume screening · Llama 3.3" },
  9: { es: "Portfolio 3D · WebGL & GSAP", en: "3D Portfolio · WebGL & GSAP" },
  10: { es: "Showcase 3D · WebGL & Framer Motion", en: "3D Showcase · WebGL & Framer Motion" },
};

const copy = {
  es: {
    titleTop: "Proyectos",
    titleBottom: "Destacados",
    viewAll: "Ver todo",
    aboutTitle: "Sobre mi experiencia",
    aboutIntro:
      "Me especializo en llevar sistemas de gestión y plataformas web desde la idea hasta producción, con foco en un problema puntual: **modernizar procesos que las PyMEs todavía manejan a mano o con sistemas viejos** —desde reemplazar un sistema legacy de liquidación de sueldos hasta automatizar tareas repetitivas con IA. Trabajé con estudios contables, comercios, plataformas de eventos y reclutamiento, siempre encargándome del **ciclo completo: frontend, backend, base de datos y despliegue**.",
    aboutStack:
      "Stack principal: React, Node.js, .NET y SQL Server, con automatizaciones en n8n e integraciones de IA cuando el proyecto lo pide, trabajando con el modelo que mejor se adapte a cada caso en lugar de atarme a un proveedor. Priorizo soluciones que el cliente pueda mantener y entender, no solo que funcionen el día de la entrega.",
    stats: [
      { value: "10+", label: "Proyectos desarrollados" },
      { value: "5+", label: "Clientes en distintos rubros" },
      { value: "+3 años", label: "Experiencia en desarrollo" },
      { value: "Legacy → Cloud", label: "De sistemas viejos a producción moderna" },
    ],
    close: "Cerrar",
    deployed: "Desplegado",
    inDevelopment: "En desarrollo",
    techUsed: "Tecnologías usadas",
    openProject: "Ingresar al proyecto",
    comingSoon: "Próximamente disponible",
  },
  en: {
    titleTop: "Featured",
    titleBottom: "Projects",
    viewAll: "View all",
    aboutTitle: "About my experience",
    aboutIntro:
      "I specialize in taking management systems and web platforms from idea to production, with a focus on one specific problem: **modernizing processes that SMBs still handle by hand or with outdated systems** — from replacing a legacy payroll system to automating repetitive tasks with AI. I've worked with accounting firms, retailers, and event and recruiting platforms, always owning the **full cycle: frontend, backend, database and deployment**.",
    aboutStack:
      "Main stack: React, Node.js, .NET and SQL Server, with n8n automations and AI integrations when the project calls for them, using whichever model best fits each case instead of tying myself to a single provider. I prioritize solutions the client can maintain and understand, not just ones that work on delivery day.",
    stats: [
      { value: "10+", label: "Projects built" },
      { value: "5+", label: "Clients across industries" },
      { value: "3+ years", label: "Development experience" },
      { value: "Legacy → Cloud", label: "From legacy systems to modern production" },
    ],
    close: "Close",
    deployed: "Deployed",
    inDevelopment: "In development",
    techUsed: "Tech stack",
    openProject: "Open project",
    comingSoon: "Coming soon",
  },
};

export default function Projects({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [selected, setSelected] = useState<Project | null>(null);

  // Bloquear el scroll del body mientras el modal está abierto
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  // Cerrar con la tecla Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            {t.titleTop}<br />{t.titleBottom}
          </motion.h2>

          <motion.a
            href="https://github.com/octi35?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors mt-2 group"
          >
            {t.viewAll}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.button
              key={project.id}
              type="button"
              onClick={() => setSelected(project)}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group block cursor-pointer text-left w-full"
            >
              {/* Image thumbnail */}
              <div className="rounded-2xl overflow-hidden bg-[#1a1a1a] aspect-[16/10] mb-4 border border-white/[0.06]">
                <img
                  src={project.image}
                  alt={project.title[locale]}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              </div>

              {/* Info */}
              <div className="flex items-start justify-between gap-4 px-1">
                <div>
                  <h3 className="text-white font-semibold text-[17px] leading-snug group-hover:text-gray-200 transition-colors">
                    {project.title[locale].split("–")[0].trim()}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {localize(subtitles[project.id] ?? project.title, locale)}
                  </p>
                </div>

                <span className="shrink-0 mt-0.5 text-gray-600 group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Case studies — el detrás de escena de los proyectos destacados */}
        <CaseStudies locale={locale} />

        {/* Resumen profesional para reclutadores */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 sm:p-10 lg:p-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
            {t.aboutTitle}
          </h3>

          <p className="text-gray-400 text-[15px] sm:text-base leading-relaxed mt-5 max-w-3xl">
            <RichText text={t.aboutIntro} />
          </p>

          <p className="text-gray-400 text-[15px] sm:text-base leading-relaxed mt-4 max-w-3xl">
            {t.aboutStack}
          </p>

          {/* Estadísticas */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-10 pt-8 border-t border-white/[0.08]">
            {t.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm mt-1.5 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Modal de detalle del proyecto */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="no-scrollbar relative w-full max-w-lg lg:max-w-5xl max-h-[90vh] lg:max-h-[600px] overflow-y-auto lg:overflow-hidden rounded-3xl bg-[#111] border border-white/10 shadow-2xl flex flex-col lg:flex-row"
            >
              {/* Botón cerrar */}
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label={t.close}
                className="absolute top-4 right-4 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-black/40 text-gray-300 hover:bg-black/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Imagen — arriba en móvil, columna izquierda en escritorio */}
              <div className="relative shrink-0 overflow-hidden bg-gradient-to-br from-[#181818] to-[#0e0e0e] aspect-[16/10] lg:aspect-auto lg:w-[52%] lg:h-auto flex items-center justify-center p-3 sm:p-4 lg:p-6 rounded-t-3xl lg:rounded-t-none lg:rounded-l-3xl border-b lg:border-b-0 lg:border-r border-white/[0.06]">
                <img
                  src={selected.image}
                  alt={selected.title[locale]}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl ring-1 ring-white/10"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              </div>

              {/* Contenido — columna derecha en escritorio, con scroll propio */}
              <div className="no-scrollbar flex flex-col lg:w-[48%] lg:overflow-y-auto p-6 sm:p-8 lg:p-9">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      selected.status === "Deployed"
                        ? "bg-emerald-500/15 text-emerald-400"
                        : "bg-amber-500/15 text-amber-400"
                    }`}
                  >
                    {selected.status === "Deployed" ? t.deployed : t.inDevelopment}
                  </span>
                </div>

                <h3 className="text-2xl lg:text-[28px] font-bold text-white leading-tight">
                  {selected.title[locale]}
                </h3>

                {/* Descripción */}
                <p className="text-gray-400 text-[15px] leading-relaxed mt-4">
                  {selected.description[locale]}
                </p>

                {/* Tecnologías */}
                <div className="mt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                    {t.techUsed}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {localize(selected.tech, locale).split(",").map((tech) => (
                      <span
                        key={tech}
                        className="text-sm px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/10 text-gray-200"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botón ingresar al proyecto — pegado al fondo en escritorio */}
                <div className="mt-8 lg:mt-auto lg:pt-8">
                  {selected.demoUrl !== "#" ? (
                    <a
                      href={selected.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
                    >
                      {t.openProject}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <a
                      href={selected.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white font-medium hover:bg-white/[0.08] transition-colors"
                    >
                      {t.comingSoon}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
