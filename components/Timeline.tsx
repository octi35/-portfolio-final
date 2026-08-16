"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar, Globe } from "lucide-react";
import { timelineData } from "@/lib/timeline";

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 25%", "end 75%"],
  });

  const beamHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm font-medium tracking-[0.2em] uppercase mb-3"
          >
            Mi recorrido
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
          >
            Mi Trayectoria
          </motion.h2>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Static track */}
          <div className="absolute left-6 top-2 bottom-2 w-px -translate-x-1/2 bg-white/10" />
          {/* Animated beam */}
          <motion.div
            style={{ height: beamHeight }}
            className="absolute left-6 top-2 w-px -translate-x-1/2 bg-gradient-to-b from-white via-white/80 to-white/20"
          />

          <div className="space-y-8">
            {timelineData.map((item, index) => {
              const isExp = item.type === "experience";
              const Icon = isExp ? Briefcase : GraduationCap;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 48, scale: 0.97 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true, margin: "-60px" }}
                  className="relative pl-16 sm:pl-20"
                >
                  {/* Node */}
                  <div className="absolute left-6 top-1 z-10 -translate-x-1/2">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full border-2 bg-[#0a0a0a] transition-colors ${
                        isExp
                          ? "border-white/60 text-white"
                          : "border-white/25 text-gray-400"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-6 backdrop-blur-sm transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.05]">
                    {/* Top accent line */}
                    <span className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

                    {/* Type + current */}
                    <div className="mb-3 flex items-center gap-3">
                      <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-gray-500">
                        {isExp ? "Experiencia" : "Educación"}
                      </span>
                      {item.current && (
                        <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white">
                          Actualidad
                        </span>
                      )}
                      {item.remote && (
                        <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[11px] font-medium text-gray-300">
                          <Globe className="h-3 w-3" />
                          Remoto
                        </span>
                      )}
                    </div>

                    {/* Title + org */}
                    <h3 className="text-lg font-semibold text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-gray-300">
                      {item.organization}
                    </p>

                    {/* Meta */}
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {item.startDate} — {item.endDate}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {item.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-relaxed text-gray-400">
                      {item.description}
                    </p>

                    {/* Skills */}
                    {item.skills && item.skills.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-gray-300 transition-colors hover:border-white/30 hover:text-white"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
