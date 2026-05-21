"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";

const subtitles: Record<number, string> = {
  1: "Plataforma de Eventos · React & SQL",
  2: "Sistema CRM/ERP · React, .NET & n8n",
  3: "Automatización con IA · n8n & APIs",
};

export default function Projects() {
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
            <motion.a
              key={project.id}
              href={project.demoUrl !== "#" ? project.demoUrl : undefined}
              target={project.demoUrl !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group block cursor-pointer"
            >
              {/* Image thumbnail */}
              <div className="rounded-2xl overflow-hidden bg-[#1a1a1a] aspect-[16/10] mb-4 border border-white/[0.06]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
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
                    {subtitles[project.id]}
                  </p>
                </div>

                {project.demoUrl !== "#" && (
                  <span className="shrink-0 mt-0.5 text-gray-600 group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                )}
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
