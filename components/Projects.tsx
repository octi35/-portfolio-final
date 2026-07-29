"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ExternalLink } from "lucide-react";
import { projects, type Project } from "@/lib/projects";

const subtitles: Record<number, string> = {
  1: "Plataforma de Eventos · React & SQL",
  2: "Sistema CRM/ERP · React, .NET & SQL Server",
  3: "SaaS de atención al cliente · IA & Supabase",
  4: "Warehouse Management · React",
  5: "Landing 3D · Three.js & React",
  6: "Gestión hotelera · Next.js & Supabase",
  7: "Sistema Contable · Automatización & APIs",
  8: "Análisis de CVs con IA · Llama 3.3",
  9: "Portfolio 3D · WebGL & GSAP",
  10: "Showcase 3D · WebGL & Framer Motion",
};

export default function Projects() {
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
            Proyectos<br />Destacados
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
            Ver todo
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
                  alt={project.title}
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
                    {project.title.split("–")[0].trim()}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {subtitles[project.id] ?? project.title}
                  </p>
                </div>

                <span className="shrink-0 mt-0.5 text-gray-600 group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Resumen profesional para reclutadores */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 sm:p-10 lg:p-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
            Sobre mi experiencia
          </h3>

          <p className="text-gray-400 text-[15px] sm:text-base leading-relaxed mt-5 max-w-3xl">
            A lo largo de estos proyectos trabajé con{" "}
            <span className="text-white font-medium">clientes reales</span> en
            rubros muy distintos —eventos, comercios, estudios contables,
            PyMEs y reclutamiento—, llevando productos desde la idea hasta su
            puesta en producción. Desarrollé{" "}
            <span className="text-white font-medium">plataformas web completas</span>,
            sistemas de gestión (CRM/ERP), automatizaciones con IA y
            experiencias web 3D, encargándome tanto del frontend como del
            backend, la base de datos y el despliegue.
          </p>

          <p className="text-gray-400 text-[15px] sm:text-base leading-relaxed mt-4 max-w-3xl">
            Me adapto al stack que cada proyecto necesita —React, TypeScript,
            Node.js, .NET, SQL, Three.js, n8n e integraciones con modelos de
            IA como Llama 3.3— y priorizo entregar soluciones que resuelvan
            problemas concretos del negocio, con buena experiencia de usuario y
            código mantenible.
          </p>

          {/* Estadísticas */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-10 pt-8 border-t border-white/[0.08]">
            {[
              { value: "10+", label: "Proyectos desarrollados" },
              { value: "5+", label: "Clientes en distintos rubros" },
              { value: "Full-stack", label: "Frontend, backend y deploy" },
              { value: "IA", label: "Automatizaciones e integraciones" },
            ].map((stat) => (
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
                aria-label="Cerrar"
                className="absolute top-4 right-4 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-black/40 text-gray-300 hover:bg-black/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Imagen — arriba en móvil, columna izquierda en escritorio */}
              <div className="relative shrink-0 overflow-hidden bg-gradient-to-br from-[#181818] to-[#0e0e0e] aspect-[16/10] lg:aspect-auto lg:w-[52%] lg:h-auto flex items-center justify-center p-3 sm:p-4 lg:p-6 rounded-t-3xl lg:rounded-t-none lg:rounded-l-3xl border-b lg:border-b-0 lg:border-r border-white/[0.06]">
                <img
                  src={selected.image}
                  alt={selected.title}
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
                    {selected.status === "Deployed" ? "Desplegado" : "En desarrollo"}
                  </span>
                </div>

                <h3 className="text-2xl lg:text-[28px] font-bold text-white leading-tight">
                  {selected.title}
                </h3>

                {/* Descripción */}
                <p className="text-gray-400 text-[15px] leading-relaxed mt-4">
                  {selected.description}
                </p>

                {/* Tecnologías */}
                <div className="mt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                    Tecnologías usadas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.tech.split(",").map((t) => (
                      <span
                        key={t}
                        className="text-sm px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/10 text-gray-200"
                      >
                        {t.trim()}
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
                      Ingresar al proyecto
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <div className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-gray-500 font-medium cursor-not-allowed">
                      Próximamente disponible
                    </div>
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
