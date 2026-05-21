"use client";

import { motion } from "framer-motion";
import { 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiNodedotjs,
  SiMysql,
  SiPython
} from "react-icons/si";
import { Workflow, BarChart3 } from "lucide-react";

const TechStack = () => {
  const technologies = [
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
    { name: "Python", icon: SiPython, color: "text-yellow-400" },
    { name: "Power BI", icon: BarChart3, color: "text-yellow-500" },
    { name: "n8n", icon: Workflow, color: "text-gray-300" },
  ];

  // Triplicate technologies for seamless infinite loop
  const duplicatedTechnologies = [...technologies, ...technologies, ...technologies];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Tecnologías
          </h2>
          <p className="text-gray-400 text-lg">
            Tecnologías y herramientas con las que trabajo
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-16 items-center"
            animate={{
              x: [0, -1800],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
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
