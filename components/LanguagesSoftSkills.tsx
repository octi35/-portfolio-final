"use client";

import { motion } from "framer-motion";
import { Languages, Sparkles } from "lucide-react";

const languages = [
  { name: "Español", level: "Nativo", value: 100 },
  { name: "Inglés", level: "B2 / C1 — profesional", value: 85 },
];

const softSkills = [
  "Autonomía & proactividad",
  "Comunicación técnica",
  "Adaptabilidad",
  "Resolución de problemas",
  "Trabajo en equipo remoto",
];

export default function LanguagesSoftSkills() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm font-medium tracking-[0.2em] uppercase mb-3"
          >
            Cómo trabajo
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
          >
            Idiomas & Soft Skills
          </motion.h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-sm transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.05]"
          >
            <span className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black">
              <Languages className="h-5 w-5" />
            </div>

            <h3 className="text-lg font-semibold text-white">Idiomas</h3>
            <p className="mt-1 text-sm text-gray-500">
              Trabajo cómodo en inglés con equipos y clientes del exterior.
            </p>

            <div className="mt-6 space-y-5">
              {languages.map((lang, idx) => (
                <div key={lang.name}>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-medium text-white">{lang.name}</span>
                    <span className="text-xs text-gray-400">{lang.level}</span>
                  </div>
                  <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/[0.07]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.value}%` }}
                      transition={{ duration: 0.9, delay: 0.2 + idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                      viewport={{ once: true }}
                      className="h-full rounded-full bg-gradient-to-r from-white/50 to-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft skills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-sm transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.05]"
          >
            <span className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black">
              <Sparkles className="h-5 w-5" />
            </div>

            <h3 className="text-lg font-semibold text-white">Soft Skills</h3>
            <p className="mt-1 text-sm text-gray-500">
              Más de 3 años trabajando en remoto con equipos distribuidos y ágiles.
            </p>

            <ul className="mt-6 space-y-3">
              {softSkills.map((skill, idx) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                  <span className="text-sm leading-relaxed">{skill}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
