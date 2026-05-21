"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/lib/certifications";

export default function Certifications() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 sm:mb-16"
        >
          <p className="text-gray-500 text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Formación
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Certificaciones
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.05]"
            >
              {/* Top accent line */}
              <span className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

              {/* Big faded index */}
              <span className="pointer-events-none absolute -right-2 -top-4 text-7xl font-bold text-white/[0.04] select-none">
                {String(cert.id).padStart(2, "0")}
              </span>

              {/* Icon + year */}
              <div className="relative flex items-center justify-between mb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                  <Award className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">
                  {cert.date}
                </span>
              </div>

              {/* Title + issuer */}
              <div className="relative mb-3">
                <h3 className="text-lg font-semibold text-white leading-snug">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-500 mt-0.5">{cert.issuer}</p>
              </div>

              {/* Description */}
              <p className="relative text-sm leading-relaxed text-gray-400 mb-5">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="relative flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
