"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Bot, Building2, Lightbulb, ArrowRight } from "lucide-react";
import { localize, type Locale, type Localized, type Translatable } from "@/lib/i18n";

interface ServiceItem {
  id: number;
  title: Translatable;
  icon: React.ElementType;
  tagline: Localized;
  content: Localized<string[]>;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Web Development",
    icon: Code2,
    tagline: {
      es: "Aplicaciones web rápidas, escalables y a medida.",
      en: "Fast, scalable, custom-built web applications.",
    },
    content: {
      es: [
        "Desarrollo de aplicaciones web modernas con React y Next.js",
        "Diseño e integración de APIs REST y bases de datos (SQL Server, PostgreSQL, MySQL)",
        "Enfoque en rendimiento, UX y diseño responsive",
      ],
      en: [
        "Building modern web applications with React and Next.js",
        "Designing and integrating REST APIs and databases (SQL Server, PostgreSQL, MySQL)",
        "Focus on performance, UX and responsive design",
      ],
    },
  },
  {
    id: 2,
    title: { es: "Automatización & Dashboards", en: "Automation & Dashboards" },
    icon: Bot,
    tagline: {
      es: "Menos trabajo manual, mejores decisiones con datos.",
      en: "Less manual work, better data-driven decisions.",
    },
    content: {
      es: [
        "Automatización de procesos con n8n e inteligencia artificial",
        "Construcción de dashboards interactivos con Power BI",
        "Integración de notificaciones y reportes automáticos para negocio",
      ],
      en: [
        "Process automation with n8n and artificial intelligence",
        "Building interactive dashboards with Power BI",
        "Automated notifications and business reports",
      ],
    },
  },
  {
    id: 3,
    title: { es: "Sistemas de Gestión para PyMEs", en: "Management Systems for SMBs" },
    icon: Building2,
    tagline: {
      es: "CRM/ERP centralizados para operar todo en un lugar.",
      en: "Centralized CRM/ERP to run everything in one place.",
    },
    content: {
      es: [
        "Diseño de soluciones tipo CRM/ERP para PyMEs",
        "Módulos de ventas, inventario, reservas y finanzas",
        "Centralización de comunicaciones en un inbox unificado (WhatsApp, Instagram, etc.)",
      ],
      en: [
        "Designing CRM/ERP-style solutions for SMBs",
        "Sales, inventory, booking and finance modules",
        "All communications centralized in a unified inbox (WhatsApp, Instagram, etc.)",
      ],
    },
  },
  {
    id: 4,
    title: {
      es: "Consultoría & Optimización de Procesos",
      en: "Consulting & Process Optimization",
    },
    icon: Lightbulb,
    tagline: {
      es: "Arquitecturas y procesos pensados para escalar.",
      en: "Architectures and processes designed to scale.",
    },
    content: {
      es: [
        "Análisis y optimización de procesos empresariales",
        "Consultoría tecnológica para transformación digital",
        "Evaluación de arquitecturas y propuesta de mejoras escalables",
      ],
      en: [
        "Business process analysis and optimization",
        "Technology consulting for digital transformation",
        "Architecture reviews and proposals for scalable improvements",
      ],
    },
  },
];

const copy = {
  es: { eyebrow: "Servicios", title: "¿Qué hago?" },
  en: { eyebrow: "Services", title: "What I Do" },
};

export default function WhatIDo({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [active, setActive] = useState(1);
  const [mobileOpen, setMobileOpen] = useState<number>(1);
  const current = services.find((s) => s.id === active)!;
  const CurrentIcon = current.icon;

  return (
    <section id="sobre-mi" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-14 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm font-medium tracking-[0.2em] uppercase mb-3"
          >
            {t.eyebrow}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
          >
            {t.title}
          </motion.h2>
        </div>

        {/* ── MOBILE layout: accordion (hidden on lg+) ── */}
        <div className="lg:hidden divide-y divide-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
          {services.map((service, index) => {
            const isOpen = service.id === mobileOpen;
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setMobileOpen(isOpen ? 0 : service.id)}
                  className="w-full flex items-center gap-4 px-5 py-4 text-left"
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                      isOpen ? "bg-white text-black" : "bg-white/[0.05] text-gray-400"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span
                    className={`flex-1 text-[15px] font-semibold transition-colors ${
                      isOpen ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {localize(service.title, locale)}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`text-xl font-light leading-none transition-colors ${isOpen ? "text-white" : "text-gray-600"}`}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1">
                        <p className="text-sm text-gray-400 mb-3">{service.tagline[locale]}</p>
                        <ul className="space-y-2.5">
                          {service.content[locale].map((item) => (
                            <li key={item} className="flex items-start gap-3 text-gray-300">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                              <span className="text-sm leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ── DESKTOP layout: interactive split (hidden below lg) ── */}
        <div className="hidden lg:grid gap-5 lg:grid-cols-[1fr,1.25fr]">
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
                      {localize(service.title, locale)}
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

                <h3 className="text-2xl font-bold text-white">{localize(current.title, locale)}</h3>
                <p className="mt-2 text-gray-400">{current.tagline[locale]}</p>

                <ul className="mt-6 space-y-3">
                  {current.content[locale].map((item, idx) => (
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
