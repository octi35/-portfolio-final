"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Bot, Building2, ChevronDown, Lightbulb } from "lucide-react";

interface ServiceItem {
  id: number;
  title: string;
  icon: React.ElementType;
  content: string[];
}

const WhatIDo = () => {
  const [openItem, setOpenItem] = useState<number | null>(1);

  const services: ServiceItem[] = [
    {
      id: 1,
      title: "Web Development",
      icon: Code2,
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
      content: [
        "Análisis y optimización de procesos empresariales",
        "Consultoría tecnológica para transformación digital",
        "Evaluación de arquitecturas y propuesta de mejoras escalables",
      ],
    },
  ];

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Qué hago?
          </h2>
          <p className="text-gray-400 text-lg">
            Servicios y soluciones que ofrezco
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className={`rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                  openItem === service.id
                    ? "bg-gradient-to-br from-orange-900/20 to-gray-900/20 border-orange-500/40 shadow-lg shadow-orange-500/10"
                    : "bg-gray-900/40 border-gray-800 hover:border-gray-700 hover:bg-gray-900/60"
                }`}
                onClick={() => toggleItem(service.id)}
              >
                {/* Header */}
                <div className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl transition-all duration-300 ${
                        openItem === service.id
                          ? "bg-orange-500/20 text-orange-400"
                          : "bg-gray-800 text-gray-400 group-hover:bg-gray-700"
                      }`}
                    >
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openItem === service.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-colors ${
                        openItem === service.id
                          ? "text-orange-400"
                          : "text-gray-400"
                      }`}
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <AnimatePresence>
                  {openItem === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-0">
                        <ul className="space-y-3">
                          {service.content.map((item, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start gap-3 text-gray-300"
                            >
                              <span className="text-orange-400 mt-1 flex-shrink-0">
                                •
                              </span>
                              <span className="text-sm leading-relaxed">
                                {item}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
