"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Bot, Building2, Lightbulb, ArrowRight } from "lucide-react";

interface ServiceItem {
  id: number;
  title: string;
  icon: React.ElementType;
  tagline: string;
  content: string[];
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Web Development",
    icon: Code2,
    tagline: "Aplicaciones web rápidas, escalables y a medida.",
    content: [
      "Desarrollo de aplicaciones web modernas con React y Next.js",
      "Integración con APIs REST y bases de datos (SQL Server, MySQL)",
      "Enfoque en rendimiento, UX y diseño responsive",
    ],
  },
  {
    id: 2,
    title: "Automatización & Dashboards",
    icon: Bot,
    tagline: "Menos trabajo manual, mejores decisiones con datos.",
    content: [
      "Automatización de procesos con n8n e inteligencia artificial",
      "Construcción de dashboards interactivos con Power BI",
      "Integración de notificaciones y reportes automáticos para negocio",
    ],
  },
  {
    id: 3,
    title: "Sistemas de Gestión para PyMEs",
    icon: Building2,
    tagline: "CRM/ERP centralizados para operar todo en un lugar.",
    content: [
      "Diseño de soluciones tipo CRM/ERP para PyMEs",
      "Módulos de ventas, inventario, reservas y finanzas",
      "Centralización de comunicaciones en un inbox unificado (WhatsApp, Instagram, etc.)",
    ],
  },
  {
    id: 4,
    title: "Consultoría & Optimización de Procesos",
    icon: Lightbulb,
    tagline: "Arquitecturas y procesos pensados para escalar.",
    content: [
      "Análisis y optimización de procesos empresariales",
      "Consultoría tecnológica para transformación digital",
      "Evaluación de arquitecturas y propuesta de mejoras escalables",
    ],
  },
];

export default function WhatIDo() {
  const [active, setActive] = useState(1);
  const current = services.find((s) => s.id === active)!;
  const CurrentIcon = current.icon;

  return (
    <section id="sobre-mi" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="text-gray-500 text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Servicios
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            ¿Qué hago?
          </h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[1fr,1.25fr]">
          {/* Left: selectable list */}
          <div className="flex flex-col gap-2">
            {services.map((service) => {
              const isActive = service.id === active;
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => setActive(service.id)}
                  className="relative w-full text-left"
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeService"
                      className="absolute inset-0 rounded-xl border border-white/20 bg-white/[0.06]"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                  <div className="relative flex items-center gap-4 p-4">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                        isActive
                          ? "bg-white text-black"
                          : "bg-white/[0.04] text-gray-400 border border-white/10"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span
                      className={`flex-1 text-[15px] font-semibold transition-colors ${
                        isActive ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {service.title}
                    </span>
                    <ArrowRight
                      className={`h-4 w-4 transition-all duration-300 ${
                        isActive
                          ? "translate-x-0 text-white opacity-100"
                          : "-translate-x-2 text-gray-500 opacity-0"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: animated detail panel */}
          <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
            {/* Watermark number */}
            <span className="pointer-events-none absolute -right-3 -top-6 select-none text-[120px] font-bold leading-none text-white/[0.035]">
              {String(active).padStart(2, "0")}
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white">
                  <CurrentIcon className="h-7 w-7" />
                </div>

                <h3 className="text-2xl font-bold text-white">{current.title}</h3>
                <p className="mt-2 text-gray-400">{current.tagline}</p>

                <ul className="mt-6 space-y-3">
                  {current.content.map((item, idx) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.08 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
