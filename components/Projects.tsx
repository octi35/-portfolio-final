"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import { projects } from "@/lib/projects";

const Projects = () => {
  const getGradientClass = (gradientType: string) => {
    const gradients: { [key: string]: string } = {
      "gradient-1": "from-violet-500 to-purple-600",
      "gradient-2": "from-blue-500 to-cyan-600",
      "gradient-3": "from-green-500 to-emerald-600",
      "gradient-4": "from-orange-500 to-red-600",
    };
    return gradients[gradientType] || "from-gray-500 to-gray-600";
  };

  return (
    <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Proyectos
          </h2>
          <p className="text-gray-400 text-lg">
            Algunos de mis proyectos y trabajos recientes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
                  <div className="rounded-2xl bg-gray-900/50 border border-gray-800 overflow-hidden hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
                {/* Project Image/Placeholder */}
                <div
                  className="h-48 relative overflow-hidden bg-gray-800"
                >
                  {project.image.startsWith('/images/') ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className={`h-full bg-gradient-to-br ${getGradientClass(
                      project.image
                    )} flex items-center justify-center`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                      <span className="text-white text-2xl font-bold z-10 opacity-50 group-hover:opacity-70 transition-opacity">
                        {project.title.split("–")[0].trim()}
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  {/* Title and Status */}
                  <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors">
                      {project.title}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                        project.status === "Deployed"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-4 pt-4">
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-500 text-white transition-all duration-300 text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
