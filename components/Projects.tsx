"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CardsParallax, type iCardItem } from "@/components/ui/scroll-cards";
import { projects } from "@/lib/projects";

const cardItems: iCardItem[] = projects.map((project) => ({
  title: project.title.split("–")[0].trim(),
  description: project.description,
  src: project.image,
  link: project.demoUrl,
  tech: project.tech,
  status: project.status,
}));

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
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
      </div>

      {/* Sticky scroll cards */}
      <CardsParallax items={cardItems} />

      {/* Resumen profesional para reclutadores */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              { value: "8+", label: "Proyectos desarrollados" },
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
    </section>
  );
}
