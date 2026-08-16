"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiDotnet,
  SiPython
} from "react-icons/si";
import { Workflow, BarChart3, Webhook, Database } from "lucide-react";

const TechStack = () => {
  const technologies = [
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "C# / .NET", icon: SiDotnet, color: "text-purple-400" },
    { name: "APIs REST", icon: Webhook, color: "text-orange-400" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-400" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
    { name: "SQL Server", icon: Database, color: "text-red-400" },
    { name: "Python", icon: SiPython, color: "text-yellow-400" },
    { name: "Power BI", icon: BarChart3, color: "text-yellow-500" },
    { name: "n8n", icon: Workflow, color: "text-gray-300" },
  ];

  // Triplicate technologies for seamless infinite loop
  const duplicatedTechnologies = [...technologies, ...technologies, ...technologies];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
          >
            Tecnologías
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg"
          >
            Tecnologías y herramientas con las que trabajo
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-16 items-center"
            animate={{
              x: [0, -2600],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 43,
                ease: "linear",
              },
            }}
          >
            {duplicatedTechnologies.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex flex-col items-center justify-center gap-3 flex-shrink-0 group cursor-pointer"
              >
                <tech.icon className={`w-12 h-12 text-gray-500 transition-all duration-300 group-hover:text-gray-300 group-hover:scale-110`} />
                <span className="text-xs text-gray-600 text-center font-normal whitespace-nowrap group-hover:text-gray-400 transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
